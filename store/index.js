/* eslint-disable no-shadow,no-param-reassign */
export const state = () => ({
  connections: {
    ws: false,
  },
});
export const mutations = {
  updateConnectionsStatus(state, { name, value }) {
    state.connections[name] = value;
  },
};
export const getters = {
  notificationsConnectionStatus: (state) => state.connections.notifications,
};
export const actions = {

};
