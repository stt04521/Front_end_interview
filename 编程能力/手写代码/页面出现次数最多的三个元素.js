function getDomCounts() {
    let nodes = document.getElementsByTagName('*');
    let tags = {};
    for (let i = nodes.length - 1; i; i--) {
        var tagName = nodes[i].tagName.toLowerCase();
        if (tags[tagName]) {
            tags[tagName]++;
        } else {
            tags[tagName] = 1;
        }
    }
    return tags;
}

function sortTags(tagsInfo) {
    return Object.keys(tagsInfo).sort((a, b) => {
        return tagsInfo[b] - tagsInfo[a]
    })
}

let tagsInfo = getDomCounts();
let sortedTags = sortTags(tagsInfo);
let mostUsedTags = {};
for (let i = 0; i < 3; i++) {
    let key = sortedTags[i];
    mostUsedTags[key] = tagsInfo[key]
}

// 实现思路 
// 1 获取全部节点 通过 tagName 进行计数
// 2 对计数结果进行排序，对象通过 object.keys 转化为数组，
// 3 数组进行 排序，取前三位