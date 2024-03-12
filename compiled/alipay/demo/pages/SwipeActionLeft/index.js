Page({
    data: {
        leftBtns: [
            {
                text: '往来记录',
                bgColor: '#1677FF',
                color: '#fff',
            },
            {
                text: '设为常用',
                bgColor: '#FFA91B',
                color: '#fff',
            },
            {
                text: '删除',
                bgColor: '#FF2B00',
                color: '#fff',
            },
        ],
        swipeIndex: -1,
    },
    onSwipeStart() {
        this.setData({ swipeIndex: '' });
    },
    onSwipeEnd(args1, args2) {
        let e, data;
        e = args2;
        data = args1;
        const { index } = e.target.dataset.item;
        data.swiped && this.setData({ swipeIndex: index });
    },
    onButtonTap(data, e) {
        console.log(data, e);
    },
});
