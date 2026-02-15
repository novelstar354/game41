// words.js
let words = [
"apple","banana","orange","grape","melon","lemon","peach","mango","cherry","strawberry",
"watermelon","kiwi","pineapple","blueberry","raspberry","apricot","coconut","papaya","pear","plum",
"car","train","plane","rocket","ship","bicycle","motorcycle","bus","subway","helicopter",
"dog","cat","mouse","rabbit","horse","cow","sheep","pig","lion","tiger",
"star","moon","sun","cloud","rain","snow","wind","storm","lightning","thunder",
"keyboard","mouse","screen","monitor","printer","speaker","camera","phone","tablet","laptop",
"game","play","score","level","time","speed","power","energy","magic","hero",
"code","script","function","variable","array","object","loop","condition","event","listener",
"rocket","satellite","planet","galaxy","comet","asteroid","nebula","blackhole","universe","orbit",
"happy","sad","angry","love","friend","family","school","homework","party","music",
"popcorn","cookie","cake","bread","milk","juice","water","tea","coffee","chocolate",
"fire","earth","air","light","dark","shadow","flame","ice","ant","bat","eel","fox","goat","hen","ibis","jaguar",
"kangaroo","monkey","newt","owl","quail","umbrella","violin","whale","xylophone","yak","zebra",
"anchor","bridge","castle","dungeon","engine","forest","garden","harbor","island","jungle",
"king","lake","mountain","needle","ocean","palace","queen","river","tower","unicorn","volcano","wizard",
"autumn","spring","summer","winter","fog","sunshine","applepie","blueberrypie","cinnamon","doughnut","eclair",
"fudge","gingerbread","honey","icecream","jelly","lemur","meerkat","ocelot","penguin","raccoon","seal","toucan",
"accordion","banjo","cello","drum","fiddle","guitar","harmonica","lyre","marimba","napkin","oven","pan",
"quiche","rollingpin","spatula","tongs","utensil","vinegar","wok","balloon","cannon","drone","fuel","glider",
"jet","kite","wifi","usb","network","online","router","server","lambda","matrix","thread",
"avatar","badge","character","dragon","enemy","fighter","guild","item","jewel",
"kingdom","legend","monster","npc","quest","raider","soldier","treasure","villager","abstract",
"boolean","class","debug","exception","float","generic","hash","index","java","kernel","library","method",
"null","operator","parameter","recursion","stack","type","accordion","fiddle","spatula","gate","fortress",
"lighthouse","dragonfruit","elderberry","fig","gooseberry","grapefruit","guava","honeydew","lychee","mulberry",
"nectarine","passionfruit","persimmon","starfruit","tangerine","yam","zucchini","artichoke","broccoli","cabbage",
"carrot","cauliflower","celery","chard","corn","cucumber","eggplant","garlic","lettuce","mushroom","onion",
"pea","pepper","potato","pumpkin","radish","spinach","squash","tomato","basil","chive","dill","oregano","parsley",
"rosemary","sage","thyme","coriander","cumin","turmeric","vanilla","amber","aqua","beige","black","blue","bronze",
"brown","cyan","emerald","fuchsia","gold","gray","green","indigo","ivory","jade","lavender","magenta","maroon",
"navy","olive","pink","purple","red","rose","ruby","sapphire","silver","tan","teal","turquoise","violet","white",
"yellow","zephyr","alpha","beta","gamma","delta","epsilon","zeta","eta","theta","iota","kappa","lambda","mu",
"nu","xi","omicron","pi","rho","sigma","tau","upsilon","phi","chi","psi","omega",
"applejack","blackberry","cranberry","date","elderberry","fig","gooseberry","huckleberry","kiwi","lime",
"moonlight","starlight","sunshine","twilight","midnight","dawn","dusk","sunset","sunrise","noon",
"alchemy","beast","crystal","dragon","element","familiar","griffin","hex","incantation","jewel",
"knight","lionheart","mage","necromancer","oracle","paladin","queen","ranger","sorcerer","thief",
"volleyball","soccer","tennis","baseball","hockey","golf","skiing","ski","skate","curling",
"anchor","beacon","castle","dungeon","fortress","gate","harbor","island","keep","lighthouse",
"airplane","balloon","cannon","drone","engine","fuel","glider","helicopter","jet","kite",
"napkin","oven","pan","quiche","rollingpin","saucepan","tongs","utensil","vinegar","wok",
"abstract","boolean","class","debug","exception","float","generic","hash","index","json",
"lambda","method","null","operator","parameter","queue","recursion","stack","type","variable",
"accordion","banjo","clarinet","drum","fiddle","guitar","harmonica","keyboard","lyre","marimba",
"napkin","oven","pan","quiche","rollingpin","spatula","tongs","utensil","vinegar","wok",
"anchor","beacon","castle","dungeon","fortress","gate","harbor","island","keep","lighthouse",
"apple","apricot","avocado","banana","blackberry","blueberry","cantaloupe","cherry","coconut","cranberry",
"date","dragonfruit","elderberry","fig","gooseberry","grape","grapefruit","guava","honeydew","kiwi",
"lemon","lime","lychee","mango","mulberry","nectarine","orange","papaya","passionfruit","peach",
"pear","persimmon","pineapple","plum","pomegranate","quince","raspberry","starfruit","strawberry","tangerine",
"watermelon","yam","zucchini","artichoke","broccoli","cabbage","carrot","cauliflower","celery","chard",
"corn","cucumber","eggplant","garlic","lettuce","mushroom","onion","pea","pepper","potato",
"pumpkin","radish","spinach","squash","tomato","turnip","yam","zucchini","basil","chive","dill","oregano",
"parsley","rosemary","sage","thyme","coriander","cumin","turmeric","vanilla","amber","aqua","beige","black",
"blue","bronze","brown","cyan","emerald","fuchsia","gold","gray","green","indigo","ivory","jade","lavender",
"magenta","maroon","navy","olive","orange","pink","purple","red","rose","ruby","sapphire","silver","tan",
"teal","turquoise","violet","white","yellow","zephyr","alpha","beta","gamma","delta","epsilon","zeta","eta",
"theta","iota","kappa","lambda","mu","nu","xi","omicron","pi","rho","sigma","tau","upsilon","phi","chi",
"psi","omega"
];

// =====================
// 重複削除
// =====================
words = [...new Set(words)];

// =====================
// ランダム順にシャッフル
// =====================
for (let i = words.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [words[i], words[j]] = [words[j], words[i]];
}

// words 配列は重複なし・ランダム順になります
console.log("単語数:", words.length);
