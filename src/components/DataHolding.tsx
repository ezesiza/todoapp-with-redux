class dataHolding {

        data = {};

    getData(data) {
        this.data = data;
        console.log('getting', data);
        return data;
    }

    setData() {
        console.log('setting', this.data);
        return this.data;
    }

}
export default new dataHolding;