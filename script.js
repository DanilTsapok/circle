function ran()
    {
        let answers = ['Так', 'Ні', 'Напевно']
        let question = document.getElementById('question').value
        if(  question.includes('@') || question.includes('#')||!question.includes('?'))
        {
            document.getElementById('answer').value = "Інше питання";
        }
        else 
        {
            document.getElementById('answer').value = answers[Math.floor(Math.random() * answers.length)];
        }
    }
    
