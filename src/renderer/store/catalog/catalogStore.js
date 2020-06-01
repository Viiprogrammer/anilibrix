import AnilibriaProxy from "@proxies/anilibria";
import AnilibriaCatalogTransformer from "@transformers/anilibria/catalog";

import __capitalize from 'lodash/capitalize'

const SET_FILTER_DATA = 'SET_FILTER_DATA';
const SET_FILTER_LOADING = 'SET_FILTER_LOADING';
const SET_CATALOG_LOADING = 'SET_CATALOG_LOADING';
const PUSH_CATALOG_RELEASE = 'PUSH_CATALOG_RELEASE';
const SET_CATALOG_PAGINATION = 'SET_CATALOG_PAGINATION';
const CLEAR_CATALOG_RELEASES = 'CLEAR_CATALOG_RELEASES';

export default {
  namespaced: true,
  state: {
    items: {
      data: [],
      loading: true,
      pagination: null,
    },
    filters: {
      genres: {
        items: [],
        loading: true,
      },
      years: {
        items: [],
        loading: true,
      }
    }
  },

  mutations: {

    /**
     * Set filter data
     *
     * @param s
     * @param filter
     * @param data
     * @return {*}
     */
    [SET_FILTER_DATA]: (s, {filter, data}) => s.filters[filter].items = data,


    /**
     * Set filter loading state
     *
     * @param s
     * @param filter
     * @param loading
     * @return {*}
     */
    [SET_FILTER_LOADING]: (s, {filter, loading}) => s.filters[filter].loading = loading,


    /**
     * Set loading state
     *
     * @param s
     * @param loading
     * @return {*}
     */
    [SET_CATALOG_LOADING]: (s, loading) => s.items.loading = loading,


    /**
     * Push release to items data array
     *
     * @param s
     * @param releases
     * @return {*}
     * @constructor
     */
    [PUSH_CATALOG_RELEASE]: (s, release) => s.items.data.push(release),


    /**
     * Clear catalog releases
     *
     * @param s
     * @return {*[]}
     */
    [CLEAR_CATALOG_RELEASES]: s => s.items.data = [],


    /**
     * Set catalog pagination
     *
     * @param s
     * @param pagination
     * @return {*}
     */
    [SET_CATALOG_PAGINATION]: (s, pagination) => s.items.pagination = pagination,

  },

  actions: {


    /**
     * Get catalog items
     *
     * @param commit
     * @param dispatch
     * @param reset
     * @param genres
     * @param years
     * @param page
     * @param perPage
     * @param sort
     * @return {Promise<void>}
     */
    getCatalogItems: async ({commit, dispatch}, {reset, genres, years, page, perPage, sort = 1}) => {
      try {

        // Clear catalog releases
        if (reset === true) commit(CLEAR_CATALOG_RELEASES);

        // Set loading state
        commit(SET_CATALOG_LOADING, true);

        // Get items from server
        // Transform items
        const {items, pagination} = await new AnilibriaProxy().getCatalogItems({sort, genres, years, page, perPage});
        const releases = AnilibriaCatalogTransformer.fetchCollection(items);

        // Collect all poster images
        await Promise.allSettled(
          releases.map(async release => {
            release.poster.image = await new AnilibriaProxy().getPoster({src: release.poster.path});
          })
        );

        // Push catalog releases
        releases.forEach(release => commit(PUSH_CATALOG_RELEASE, release));

        // Set updated pagination data
        commit(SET_CATALOG_PAGINATION, pagination);

      } catch (error) {

        dispatch('app/setError', 'Произошла ошибка при загрузке релизов', {root: true});
        dispatch('app/setError', error, {root: true});

      } finally {

        commit(SET_CATALOG_LOADING, false);

      }
    },


    /**
     * Get genres filter
     *
     * @param commit
     * @param dispatch
     * @param state
     * @return {Promise<void>}
     */
    getCatalogGenresFilter: async ({commit, dispatch}) => {

      const filter = 'genres';

      try {

        commit(SET_FILTER_LOADING, {filter, loading: true});

        // Get data
        // Set filter data
        const data = (await new AnilibriaProxy().getCatalogGenres()).map(genre => __capitalize(genre));
        commit(SET_FILTER_DATA, {filter, data});

      } catch (error) {

        dispatch('app/setError', 'Произошла ошибка при загрузке фильтров по жанрам', {root: true});
        dispatch('app/setError', error, {root: true});

      } finally {

        commit(SET_FILTER_LOADING, {filter, loading: false});

      }
    },


    /**
     * Get years filter
     *
     * @param commit
     * @param dispatch
     * @param state
     * @return {Promise<void>}
     */
    getCatalogYearsFilter: async ({commit, dispatch}) => {

      const filter = 'years';

      try {

        commit(SET_FILTER_LOADING, {filter, loading: true});
        commit(SET_FILTER_DATA, {filter, data: await new AnilibriaProxy().getCatalogYears()});

      } catch (error) {

        dispatch('app/setError', 'Произошла ошибка при загрузке фильтров по годам', {root: true});
        dispatch('app/setError', error, {root: true});

      } finally {

        commit(SET_FILTER_LOADING, {filter, loading: false});

      }
    },
  }

}