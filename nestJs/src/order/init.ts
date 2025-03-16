import { CreateOrder } from "./dto/create-order.dto";

const data: CreateOrder[] = [
    {
        name: '成都军屯锅盔早餐锅盔饼摆摊小吃',
        orderImage: 'https://img.alicdn.com/bao/uploaded/i2/2214514581758/O1CN01kixv0U1OrD3OncUjC_!!0-item_pic.jpg_460x460q90.jpg_.webp',
        desc: '成都军屯锅盔锅魁饼四川五香商用早餐半成品彭州糕点特产小吃摆摊',
        shopName: '成都军屯锅盔',
        cost: 800
    },
    {
        name: '养不死！禅意竹柏盆景小盆栽',
        orderImage: 'https://img.alicdn.com/bao/uploaded/i3/2212851181725/O1CN01IfJFwl1Oc66EC00rV_!!0-item_pic.jpg',
        desc: '竹柏盆景迷你小盆栽驱蚊水培植物花卉办公室内桌面禅意绿植微景观',
        shopName: '爱你一万年（鲜花）',
        cost: 300,
    },
    {
        name: '邳州香葱锅饼当天现做',
        orderImage: 'https://img.alicdn.com/bao/uploaded/i3/2746528663/O1CN01OHP3vX2DrhxLhywxG_!!2746528663.jpg_460x460q90.jpg_.webp',
        desc: '邳州锅饼正宗手工香葱锅饼现做炭烤葱油潮牌咸味烧饼徐州新沂特产',
        shopName: '菜妈妈',
        cost: 1300,
    },
    {
        name: '赣南特产花生巴豆巴子油炸饼',
        orderImage: 'https://img.alicdn.com/bao/uploaded/i4/2201157635244/O1CN01yhx2bk1obnyIRlTL5_!!2201157635244.jpg_460x460q90.jpg_.webp',
        desc: '江西赣州月亮巴粑客家锅巴赣州花生巴虾米巴香辣腌菜巴零食特产',
        shopName: '赣州宏望食品有限公司',
        cost: 360,
    },
    {
        name: '四季奶油草莓苗秧盆栽带土新苗',
        orderImage: 'https://img.alicdn.com/bao/uploaded/i3/2218872191094/O1CN01OCINiJ1Jx6KNegsBO_!!4611686018427385974-0-item_pic.jpg_460x460q90.jpg_.webp',
        desc: '四季奶油草莓苗秧盆栽阳台种植带土新苗红颜丹东99种籽子当年结果',
        shopName: '桐梦昀',
        cost: 810,
    },
    {
        name: '千层酥咸麻叶儿时年味老式零食',
        orderImage: 'https://img.alicdn.com/bao/uploaded/i1/2200657667136/O1CN01dx6S1A22aLDFf6zkn_!!0-item_pic.jpg_460x460q90.jpg_.webp',
        desc: '千层酥麻叶子油炸传统小吃焦叶子老式古法老点心日常解馋小零食',
        shopName: '泰安高新区富强食品有限公司',
        cost: 800,
    },
    {
        name: '碗莲种七彩五颜六色水培花卉水养四季莲花荷花种莲藕绿植水培莲子',
        orderImage: 'https://img.alicdn.com/bao/uploaded/i1/2215436583362/O1CN01ISdUXr1ahqaqJBf1w_!!4611686018427380162-0-item_pic.jpg_460x460q90.jpg_.webp',
        desc: '遇水即活【开口碗莲10粒送营养液】99%发芽率 遇水即活【开口碗莲20粒送营养液】99%发芽率 遇水即活【开口碗莲30粒送营养液】99%发芽率 遇水即活【开口碗莲50粒送营养液】99%发芽率 遇水即活【开口碗莲100粒送营养液】99%发芽率 遇水即活【开口碗莲70粒送营养液】99%发芽率',
        shopName: '淘福农',
        cost: 400,
    },
    {
        name: '延边明太鱼干无污染即食烤鳕鱼片',
        orderImage: 'https://img.alicdn.com/bao/uploaded/i1/2200620769352/O1CN01DwFW9P2IxH0DVTcOT_!!2200620769352.jpg_460x460q90.jpg_.webp',
        desc: '延边特产朝鲜族明太鱼干丝即食海鲜无污染低脂零食香脆炭烤鳕鱼片',
        shopName: '探食家',
        cost: 540
    },
    {
        name: '遇水开花水培栀子花玉兰花卉浓香',
        orderImage: 'https://img.alicdn.com/bao/uploaded/i1/2217773077680/O1CN01bzWxpq26bUjdbUvmU_!!0-item_pic.jpg_460x460q90.jpg_.webp',
        desc: '遇水开花水培栀子花玉兰花卉浓香室内水培植物办公室绿植新品好养',
        shopName: '念纵',
        cost: 10.2
    },
    {
        name: '成都特产龙须酥四川辉煌小吃糕点',
        orderImage: 'https://img.alicdn.com/bao/uploaded/i1/2933608632/O1CN01yfNF9f2DdVomqEsZF_!!0-item_pic.jpg_460x460q90.jpg_.webp',
        desc: '成都特产龙须酥250g辉煌正宗传统手工龙须糖四川特色小吃糕点零食',
        shopName: '辉煌',
        cost: 13.8
    },
    {
        name: '山东特产香酥煎饼250g*4包即食',
        orderImage: 'https://img.alicdn.com/bao/uploaded/i2/2206480940583/O1CN01WvQakp1GB3j11EfAr_!!0-item_pic.jpg_460x460q90.jpg_.webp',
        desc: '煎饼山东特产曲阜正宗香酥煎饼多味手工酥脆夹馅花生煎饼4大包',
        shopName: '煎饼山东特产曲阜正宗香酥煎饼多味手工酥脆夹馅花生煎饼4大包',
        cost: 15.8
    },
    {
        name: '正宗内蒙古风干超干薄脆牛肉片',
        orderImage: 'https://img.alicdn.com/bao/uploaded/i3/1720131773/O1CN01qw5vrh1Oy5FXvixF1_!!4611686018427379901-0-item_pic.jpg_460x460q90.jpg_.webp',
        desc: '正宗内蒙古超干风干牛肉干原切牛排薄脆片减盐肥瘦零食牛脆脆薯片',
        shopName: '草原达尔沁',
        cost: 56.8
    }
];

export default data;