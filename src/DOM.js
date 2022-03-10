/*
  В функцию appendToBody передаются 3 параметра:
  tag - имя тега, content - содержимое тега и count - количество вставок.
  Необходимо, чтобы функция осуществила вставку на страницу указанный тег с указанным содержимым указанное число раз.
  Считаем, что всегда передается тег, допускающий вставку текста в качестве своего содержимого (P, DIV, I и пр.).
*/
export function appendToBody(tag, content, count) {
    for (let i = 0; i < count; i++) {
        document.body.insertAdjacentHTML(
            'beforeend',
            `<${tag}>${content}</${tag}>`,
        );
    }
}

/*
  Создайте дерево вложенных тегов DIV.
  Каждый узел дерева должен содержать childrenCount узлов.
  Глубина дерева задается параметром level.
  Каждый элемент должен иметь класс вида item_n, где n - глубина вложенности элемента. (Нумерацию ведем с единицы).
  Сформированное дерево верните в качестве результата работы функции.
*/
export function generateTree(childrenCount, level) {
    document.body.insertAdjacentHTML('beforeend', `<div class='item_1'></div>`);
    let elementsToInsert = document.getElementsByClassName('item_1');
    for (let i = 2; i <= level; i++) {
        for (let elem of elementsToInsert) {
            for (let j = 0; j < childrenCount; j++) {
                elem.insertAdjacentHTML(
                    'beforeend',
                    `<div class='item_${i}'></div>`,
                );
            }
        }
        elementsToInsert = document.getElementsByClassName(`item_${i}`);
    }
    return document.getElementsByClassName('item_1')[0];
}

/*
  Используйте функцию для создания дерева тегов DIV из предыдущего задания.
  Создайте дерево с вложенностью 3 и числом элементов в каждом узле 2.
  Далее замените все узлы второго уровня (т.е. имеющие класс item_2) на теги SECTION.
  Остальную структуру дерева сохраните неизменной, включая классы и те элементы,
  которые находились внутри переписанных тегов.
  Сформированное дерево верните в качестве результата работы функции.
*/
export function replaceNodes() {
    generateTree(2, 3);

    const elementsToChange = document.getElementsByClassName('item_2');

    for (let elem of elementsToChange) {
        const elementNew = document.createElement('section');
        elementNew.innerHTML = elem.innerHTML;

        for (let attr of elem.attributes) {
            elementNew.setAttribute(attr.name, attr.value)
        }

        elem.before(elementNew);
        elem.remove();
    }

    return document.getElementsByClassName('item_1')[0];
}
