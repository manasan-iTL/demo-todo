console.log("読み込み完了")

/* ボタンの要素取得 */

const addTaskButton = document.getElementById("add-task")
const finishTaskButtons = document.getElementsByClassName("finish-task")

/* リスト全体を取得 */
const taskList = document.getElementById("todo-list")

/* 追加ボタンを押したときの処理 */

const addTask = () => {
    const inputValue = document.querySelector("input[name='task']").value
    const taskElement = `<li class="flex-list"><p class="task-text">${inputValue}</p><div class="button-group"><button class="finish-task">完了</button></div></li>`
    taskList.insertAdjacentHTML('beforeend', taskElement)
}



/* 完了ボタンを押したときの処理 */

// const finishTask = () => {
//     console.log("click")
//     const removeArea = finishTaskButton.closest("li.flex-list")
//     console.log(removeArea)
// }

// const checkFinishTask = () => {
//     for (let ele of finishTaskButtons) {
//         ele.addEventListener("click", finishTask)
//     }
// }


addTaskButton.addEventListener("click", addTask)
checkFinishTask()
