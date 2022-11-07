

var A=[['_','_','_'],['_','_','_'],['_','_','_']];


function checkF(){
	var i,j;
	for(i=0;i<3;i++){
		for(j=0;j<3;j++){
			if(A[i][j]=='_'){
				return false;
			}
		}
	}	
	return true;			
}	
	
function checkW(){
	var i,j;
	if((A[0][0]==A[1][1]&&A[1][1]==A[2][2])||(A[0][2]==A[1][1]&&A[1][1]==A[2][0])){
		if(A[1][1]=='x'){
			return 10;
		}	
		else{
			if(A[1][1]=='o'){
				return -10;
			}
		}	
	}
	for(i=0;i<3;i++){
		if((A[i][0]==A[i][1]&&A[i][1]==A[i][2])||(A[0][i]==A[1][i]&&A[1][i]==A[2][i])){
			if(A[i][i]=='x'){
				return 10;
			}else{
				if(A[i][i]=='o'){
					return -10;
					}
				}
			
			}	
		}	
	return 0;				

}


function play(x,y){
	document.getElementById('pc').style.display="none";
	document.getElementById('reset').style.display="block";
	if(A[x][y]!='_'){
		s4.play();
	}else{	
		s1.play();
		var idd="A"+x+y;
		A[x][y]='x';
		document.getElementById(idd).innerHTML="X";
		if(checkF()){
			 msg(" Draw");
			setTimeout(function(){clearA();}, 1500);
			
		}else{
			checkO(1,0,0);	
			if(checkW()!=0){
				victory();
				s3.play();
				if(checkW()==1){
					msg("You Won !");
					setTimeout(function(){ clearA();	 }, 1500);	
				}else{
					msg("Computer Won");
					setTimeout(function(){clearA();	}, 1500);
				}
			}
		}
			
	}
}	
	
	
function checkO(ll,a,b){
	var i,j,cw;
	var r,c,x;
	var mm;
	if(ll%2==1){
		mm=1000;
	}else{
		mm=-1000;	
	}	
	cw=checkW();
	if(cw!=0){
		A[a][b]='_';
		return cw;	
	}
	
	if(checkF()){
		A[a][b]='_';
		return 0;	
	}
	
	for(i=0;i<3;i++){
		for(j=0;j<3;j++){
			if(A[i][j]=='_'){
				
				if(ll%2==1){
				A[i][j]='o';
				x=checkO(ll+1,i,j);
				if(x<mm){
					mm=x;
					r=i;
					c=j;
				}
				A[i][j]='_';
				}else{
					A[i][j]='x';
					x=checkO(ll+1,i,j);
					if(x>mm){
						mm=x;
						r=i;
						c=j;
					}
				A[i][j]='_';
					
				}
				
				
				
			}
		}
	}		
	if(ll%2==1){
		if(ll==1){
			A[r][c]='o';
			var idd="A"+r+c;
			document.getElementById(idd).innerHTML="O";
			if(checkF()){
				msg("Draw");
				setTimeout(function(){clearA();}, 1500);
			}
		}
		mm=mm+ll;	
	}else{
		mm=mm-ll;
	}	
	return mm;
}	
	

function pcplay(){	
	document.getElementById('pc').style.display="none";	
	document.getElementById('reset').style.display="block";
	checkO(1,0,0);
	s2.play();
}
	
	
	