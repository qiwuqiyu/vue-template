export default {

    increment(state, payload) {
        console.log(payload);
        state.title = payload.title
    }

    // setState(state, payload) { // 设置状态
    //     let keys = payload.key.split(".");
    //     let target = state;
    //     for (let i = 0; i < keys.length - 1; ++i) {
    //         target = target[keys[i]];
    //     }
    //     if (Object.prototype.toString.call(payload.value) == '[object Object]') {
    //         target[keys[keys.length - 1]] = {
    //             ...target[keys[keys.length - 1]],
    //             ...payload.value
    //         };
    //     } else {
    //         target[keys[keys.length - 1]] = payload.value;
    //     }
    // },
}
