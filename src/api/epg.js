export default {
  getEpg(config = undefined) {
    const endpoint = import.meta.env.VITE_API;
    return new Promise((resolve, reject) => {
      fetch(`${endpoint}/epg`, config)
        .then(response => response.json())
        .then(response => resolve(response))
        .catch(error => reject(error))
    })
  },
}