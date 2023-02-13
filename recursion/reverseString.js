function reverse(string) {
    // add whatever parameters you deem necessary - good luck!

    const arrayString = string.split('');

    const recursiveReverse = (array) => {
        if (array.length === 0) return [''];

        return [...array.splice(-1, 1), ...recursiveReverse(array)]
    }

    const result = recursiveReverse(arrayString)

    return result.join('');

}

console.log(reverse('awesome'))// 'emosewa'
  // reverse('rithmschool') // 'loohcsmhtir'