var s1,s2,s3,s4;
s1=new Audio("sounds/1.mp3");
s2=new Audio("sounds/2.wav");
s3=new Audio("sounds/3.wav");
s4=new Audio("sounds/4.wav");
		
function intro(){
	msg("TIC TAC TOE<br><I>IMPOSSIBLE</I><BR><small>by Anirban Mukherjee</small>");
}	
		
function msg(text){
	var msgL=document.getElementById('msgLayer');
	var msgC=document.getElementById('msg');
	msgL.style.display="block";
	msgC.innerHTML=text;
	setTimeout(function(){msgL.style.display = "none";},1500);
}
	
function clearA(){
	document.getElementById('pc').style.display="block";
	document.getElementById('reset').style.display="none";
	A=[['_','_','_'],['_','_','_'],['_','_','_']];
	var i,j;
	for(i=0;i<3;i++){
		for(j=0;j<3;j++){
			var idd="A"+i+j;
			document.getElementById(idd).innerHTML="";
		document.getElementById(idd).style.color="black";			
		}
	}
}

function victory(){
	var i,j,idd;
	if(A[0][0]==A[1][1]&&A[1][1]==A[2][2]){
		for(i=0;i<3;i++){
			idd="A"+i+i;
			document.getElementById(idd).style.color="white";
		}
	}	
	if(A[0][2]==A[1][1]&&A[1][1]==A[2][0]){
		for(i=0;i<3;i++){
			idd="A"+i+(2-i);
			document.getElementById(idd).style.color="white";
		}
	}	
	for(i=0;i<3;i++){
		if(A[i][0]==A[i][1]&&A[i][1]==A[i][2]){
			for(j=0;j<3;j++){
				idd="A"+i+j;
				document.getElementById(idd).style.color="white";
			}
		}
	}
	
	for(i=0;i<3;i++){
		if(A[0][i]==A[1][i]&&A[1][i]==A[2][i]){
			for(j=0;j<3;j++){
				idd="A"+j+i;
				document.getElementById(idd).style.color="white";
			}
		}
	}
}

