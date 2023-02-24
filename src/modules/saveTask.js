const saveTask = () => {
    localStorage.setItem('task', JSON.stringify(tasks))
}
export default saveTask;