import consumer from "./consumer"

consumer.subscriptions.create("BillScrapeChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    if (data.refetch_bills){
      window.dashboardCharts.bill()
    }
    // Called when there's incoming data on the websocket for this channel
  }
});
