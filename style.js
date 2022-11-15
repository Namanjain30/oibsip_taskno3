
 var selectrow = null
 function onforceSubmit(e){
    event.preventDefault()
    var fordata = read()
    if (selectrow === null){
        insert(fordata)
    }
 }

 function read(){
    var fordata = {}
    fordata['title'] = document.getElementById('text').value;
    fordata['description'] = document.getElementById('textarea').value;
    return fordata
 }

 function insert(data){
    var table = document.getElementById('store').getElementsByTagName('tbody')[0]
    var newrow = table.insertRow(table.length)
    var cell1 = newrow.insertCell(0)
    cell1.innerHTML = data.title
    var cell2 = newrow.insertCell(1)
    cell2.innerHTML = data.description
    var cell3 = newrow.insertCell(2)
    cell3.innerHTML = `<button onClick = 'ondelete(this)'>delete</button>`
 }

 function ondelete(td){
    if (confirm('Do you want to delete')){
        row = td.parentElement.parentElement
        document.getElementById('store').deleteRow(row.rowIndex)
    }
 }