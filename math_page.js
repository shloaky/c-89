player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1score = 0;
player2score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";

document.getElementById("player1_score").innerHTML = player1score;
document.getElementById("player2_score").innerHTML = player2score;

document.getElementById("player_question").innerHTML = "question turn-" + player1_name;
document.getElementById("player_answer").innerHTML = "answer turn-" + player2_name;

function send(){
    get_word = document.getElementById("Word").value;
    word = get_word.toLowerCase();
    console.log("word in lower case =" + word);

    Chrat1 = word.charAt(1);
    console.log(Chrat1);
        length_divided_2 = Math.floor(word.length/2);
        Chrat2 = word.charAt(length_divided_2);
        console.log(Chrat2);

        length_minus_1 = word.length - 1;
        Chrat3 = word.charAt(length_minus_1);
        console.log(Chrat3);
        
        remove_Chrat1 = word.replace(Chrat1,"_");
        remove_Chrat2 = remove_Chrat1.replace(Chrat2,"_");
        remove_Chrat3 = remove_Chrat2.replace(Chrat3,"_");
        console.log(remove_Chrat3);

        question_word = "<h4 id = 'word_display'>Q."+ remove_Chrat3 + "</h4>";
        input_box = "<br> Answer: <input type = 'text' id = 'input_check_box'>";
    
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row = question_word + input_box + check_button;
document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";
}

