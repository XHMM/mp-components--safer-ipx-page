Component({
  properties: {
    pageHeight: {
      type: String,
      value: '100vh'/* ,
      observer(newVal, oldVal, changedPath) {
        console.log(newVal, oldVal, changedPath)
        if (newVal.startsWith('calc(')) {
          console.log('pageHeight type: calc')
          this.setData({
            pageHeightType: 'calc'
          })
        } else if (newVal.startsWith('var(')) {
          console.log('pageHeight type: var')
          this.setData({
            pageHeightType: 'var'
          })
        } else {
          console.log('pageHeight type: normal')
        }
      } */
    }
  },
  data: {
    pageHeightType: 'normal', // normal即普通值比如100px var即css variable calc即calc(x - x)
    isIpx: false
  },
  externalClasses: ['safer-ipx-page-class'],
  lifetimes: {
    attached() {
      wx.getSystemInfo({
        success: (res) => {
          if (res.model === 'iPhone X') this.setData({isIpx: true})
        },
        fail: (err => {
          console.log(err)
        })
      })
    }
  }
})
