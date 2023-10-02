let body=document.querySelector('body');
body.style.backgroundColor='azure';
function storeInLocal(event) {
    event.preventDefault(event);
        const amount=document.getElementById('amount').value;
        const description=document.getElementById('description').value;
        const category=document.getElementById('category').value;

        const expenseData = {
            amount: amount,
            description: description,
            category: category
        };

        const timestamp = new Date().getTime();
        localStorage.setItem(timestamp, JSON.stringify(expenseData));
        showExpenseOnScreen(expenseData,timestamp);
    }

    function showExpenseOnScreen(expenseData, timestamp) {
        const parentEle=document.getElementById('listofitems');
        const childEle=document.createElement('li');
        childEle.textContent=expenseData.amount+'-'+expenseData.description+'-'+expenseData.category
    
        const deleteButton=document.createElement('input')
        deleteButton.type='button';
        deleteButton.value='delete Expense';
        deleteButton.onclick=()=>{
            localStorage.removeItem(timestamp);
            //parentEle.remove(childEle);
            parentEle.removeChild(childEle);
        }
        const editButton=document.createElement('input');
        editButton.type='button';
        editButton.value='edit';
        editButton.onclick=()=> {
            localStorage.removeItem(timestamp);
            parentEle.remove(childEle);
            document.getElementById('amount').value=expenseData.amount;
            document.getElementById('description').value=expenseData.description;
            document.getElementById('category').value=expenseData.category;
        }

        childEle.appendChild(deleteButton);
        childEle.appendChild(editButton);


        parentEle.appendChild(childEle);
    }
