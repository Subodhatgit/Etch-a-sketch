    window.onload=function(){

    //Creating a welcome text//
    const welcomeText=document.createElement('h1');
    welcomeText.textContent="Welcome to Etch-a-sketch";

    //Styling welcome text//
    welcomeText.style.textAlign="center";
    welcomeText.style.color="#f9dad0"
    welcomeText.style.backgroundColor="#818aa3"
    welcomeText.style.display="block";
    welcomeText.style.marginBottom="33px"

    
    
    //Creating a space for user to input no.of squares//
    const noOfSquares = document.createElement('p');
    noOfSquares.textContent = "Give the number of squares(less than 100):";

    const userInput = document.createElement("input");

    
    //Styling noOfSquares//
    noOfSquares.style.display="inline-flex";
    userInput.style.display="inline-flex";
    noOfSquares.style.justifyContent="center"
    userInput.style.alignContent="center";
    userInput.style.justifyContent="center";



    //Creating a container div//
    const container= document.createElement('section');
    document.body.appendChild(container);



    //Styling container//
    container.style.height = "auto"
    container.style.width = '50%';
    container.style.margin = "auto"
    


    //Creating div to store input values and buttons//
    const divForUserInputs = document.createElement('div');



    //Appending welcome text before container//
    document.body.insertBefore(welcomeText,document.body.firstChild)    
    
    
    
    //Appending userinput space before container//


    document.body.insertBefore(divForUserInputs,welcomeText.nextSibling);
    divForUserInputs.appendChild(noOfSquares);
    divForUserInputs.appendChild(userInput);
    divForUserInputs.style.display="flex";
    divForUserInputs.style.flexDirection="row"
    divForUserInputs.style.alignItems="center";
    divForUserInputs.style.justifyContent="center"

    
    
    //Making container a flex container//
    container.style.display = 'flex';
    container.style.flexDirection = 'column';

    const confirmation = document.createElement('button');
    confirmation.textContent = "OK";
    divForUserInputs.appendChild(confirmation);

    confirmation.style.marginLeft="5px"      

    confirmation.addEventListener('click',()=>{
    console.log(userInput.value);    


    while(container.firstChild){
        container.removeChild(container.firstChild);

    }
    const overLimit = document.createElement('p');

    if(userInput.value>100){
        // overLimit.textContent="(Please give a number less than 100)"
        // document.body.insertBefore(overLimit,container);
        // overLimit.style.display="block";
        // overLimit.style.textAlign='center'
    }else{

        //Loops to create a 16*16 grid// 

    for(let a=0;a<userInput.value;a++){

        //Creating a row//
        const row = document.createElement('div');
        container.appendChild(row);

        //Styling row//
        row.style.display = "flex";
        row.style.flexDirection = 'row';
        row.style.alignItems="center";
        row.style.justifyContent="center"

        for(let i=0;i<userInput.value;i++){

                //Creating divs for square grid//
                const divsForSquares = document.createElement('div');
                row.appendChild(divsForSquares);

                const boxSize = Math.floor(container.clientWidth / userInput.value)  + 'px'; // Use container width for horizontal fit


                //Styling 16 divs//
                divsForSquares.style.backgroundColor="white"
                divsForSquares.style.border = "1px solid gray";
                divsForSquares.style.height = boxSize
                divsForSquares.style.width = boxSize

                divsForSquares.style.display="flex";

                //adding hover effect to each div//
                divsForSquares.addEventListener('mouseenter',()=>{
                    divsForSquares.style.backgroundColor="black";
                })
            }
   }}
})
   console.log(userInput.value)
}