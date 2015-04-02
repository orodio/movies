if (true) {
  let dispatcher = require("dispatcher")
  let movieStore = require("stores/movies")

  dispatcher.register(payload => {
    console.log("~~ Dispatcher: ", payload)
  })

  movieStore.sub(() => {
    console.log("~~ MyList: ",          movieStore.getMyList())
    console.log("~~ Recommendations: ", movieStore.getRecommendations())
  })
}
