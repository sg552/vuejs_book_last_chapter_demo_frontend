import map from 'array-map'
import find from 'array-find'

export default function (value, list, delimiter) {
  if (value && !list.length) {
    return ''
  }
  if (!delimiter) {
    delimiter = ' '
  }


  name = ""
  list.map(function(x){
    if (x.value === parseInt(value)) {
      name = x.name
    }
  });

  return name
  // 底下的有问题先注释了


  let rs = map(value, (one, index) => {
    if (list.length && Object.prototype.toString.call(list[0]) === '[object Array]') {
      return find(list[index], item => {
        console.info('one 1 ============= ', one)
        return item.value === one

      })
    } else {
      return find(list, item => {
        console.info('one 2 ============= ', one)
        return item.value === one
      })
    }
  })
  rs = rs.filter(one => {
    return typeof one !== 'undefined'
  })
  console.info('rs === ' + rs)
  return map(rs, one => {
    console.info('one_name' + one.name)
    return one.name
  }).join(delimiter).replace('--', '')
}
