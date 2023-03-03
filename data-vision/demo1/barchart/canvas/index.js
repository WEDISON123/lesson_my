const data = [
    { name: "questions", value: 17 },
    { name: "schools", value: 25 },
    { name: "philosophers", value: 35 },
]

const chartWidth = 480 // 条形图宽度
const chartHeight = 300 // 条形码高度
const margin = 15 // 条形图的外间距
// canvas 画布的大小
const containerWidth = chartWidth + margin * 2
const containerHeight = chartHeight + margin * 2
// 取出所有的name x 坐标
// 生成数组 []   new Array(10)   Array.from
const names = Array.from(data, (d) => d.name)
const values = Array.from(data, (d) => d.value)
// 不需要item _来占位
const indices = Array.from(data, (_, i) => i)
console.log(names, values, indices)

const step = chartWidth / names.length 
const barWidth = step * .8  // x 轴的偏移
console.log(step, barWidth);
// 横坐标每个name 的绘制起始位置
const xs = Array.from(indices, (i) => i * step)
console.log(xs)

const y = chartHeight
const vmax = Math.max(...values)
const barHeights = Array.from(values, (v) => chartHeight * (v / vmax))
console.log(barHeights);

const nameColor = {
    questions: '#588ff9',
    schools: '#657898',
    philosophers: '#61ddaa',
}

const colors = Array.from(names, (name) => nameColor[name])
console.log(colors);
