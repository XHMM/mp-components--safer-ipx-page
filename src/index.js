Component({
  properties: {
    pageHeight: {
      type: String,
      value: "100vh"
      /* observer(newVal, oldVal, changedPath) {
        console.log(newVal, oldVal, changedPath)
      } */
    }
  },
  data: {
    isIpx: false
  },
  externalClasses: ["safer-ipx-page-class"],
  lifetimes: {
    attached() {
      wx.getSystemInfo({
        success: res => {
          if (res.model === "iPhone X") this.setData({ isIpx: true });
        },
        fail: err => {
          console.log(err);
        }
      });
    }
  }
});
