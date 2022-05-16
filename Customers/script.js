// Get the modal
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");

// Get the button that opens the send money modal
var sendBtn = document.getElementById("sendButton");

// Get the button that opens the transaction modal
var transactionBtn = document.getElementById("transactionButton");

// Get the <span> element that closes the modal
var span1 = document.getElementById("close1");
var span2 = document.getElementById("close2");

var sendMoneyBtn=document.querySelector(".sendMoneyButton");

var nameList=document.querySelectorAll('.name');

var emailList=document.querySelectorAll('.email');

var genderList=document.querySelectorAll('.gender');

var userFound=0;

var myBalanceAmount=document.querySelector('#myBalance').innerHTML;

var tableContent=document.querySelector('.tableContent')
var count=0;

var transactionListName=[];
var transactionListEmail=[];
var transactionListGender=[];
var transactionListAmount=[];
var transactionListDate=[];
sendMoneyBtn.onclick = function() {
  var receiver = document.querySelector('.receiver').value;
  var amount = document.querySelector('.amount').value;
  var balanceList=document.querySelectorAll('.balance');
  for(var i=0;i<nameList.length;i++) {
      if(nameList[i].innerHTML.toUpperCase()===receiver.toUpperCase()) {
        userFound=1;
        break;
    }
  }
  if(userFound===0){
    alert("User not found");
  }
  else if(myBalanceAmount-amount<500){
    alert('Minimum Balance of 500 must be maintained.');
  }
  else{
    myBalanceAmount-=amount;
    balanceList[i].innerHTML=Number(balanceList[i].innerHTML)+Number(amount);
    document.querySelector('#myBalance').innerHTML=myBalanceAmount;
    alert("You have  successfully sent "+amount+" to "+receiver);
    transactionListName[count]=nameList[i].innerHTML;
    transactionListEmail[count]=emailList[i].innerHTML;
    transactionListGender[count]=genderList[i].innerHTML;
    transactionListAmount[count]=amount;
    transactionListDate[count]=new Date();
    count++;
  }
  receiver='';
  amount='';
}

transactionBtn.onclick=function(){
  modal2.style.display = "block";
  if(count===0){
    tableContent.innerHTML=`<h1>No Record Found</h1>`;
  }
  else{
    var tableData='';
    for(let i=0;i<count;i++){
      tableData+=`
      <tr>
            <td>${i+1}.</td>
            <td>${transactionListName[i]}</td>
            <td>${transactionListEmail[i]}</td>
            <td>${transactionListGender[i]}</td>
            <td>${transactionListAmount[i]}</td>
            <td>${transactionListDate[i]}</td>
        </tr>
      `
    }
    tableContent.innerHTML=`
    <h1>Your Past Transactions.</h1>
    <table id='customers'>
      <thead>
          <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>E-mail</th>
              <th>Gender</th>
              <th>Amount Sent(in $)</th>
              <th>Date and Time</th>
          </tr>
      </thead>
      <tbody>
          ${tableData}
        </tbody>
    </table>
`;
  }
}

// When the user clicks the button, open the modal 
sendBtn.onclick = function() {
  modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}
span2.onclick = function() {
  modal2.style.display = "none";
}
