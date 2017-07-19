var questions = 8;
var questionsLeft = ' [' + questions + ' questions left]';
var name = prompt('Please type a name' + questionsLeft);
questions -= 1;
var verb = prompt('Please type a verb that ends in -ing ' + questionsLeft);
questions -= 1;
var adverb = prompt('Please type an adverb' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var verb2 = prompt('Please type a verb that doesnt end in -ing ' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var adjective = prompt('Please type another adjective' + questionsLeft);
questions -= 1;
var adjective3 = prompt('Please type another adjective' + questionsLeft);
questions -= 1;
var adverb2 = prompt('Just one more adverb' + questionsLeft);
questions -= 1;
var newname = prompt('Please type a your name' + questionsLeft);
questions -= 1;
alert('All done. Ready for the message?');
var sentence = "<h2>Dear " + name
sentence += ' I have been ' + verb
sentence += ' about you all day long. I ' +  adverb sentence += 'the way you' + verb2 sentence += '. Your'+ adjective sentence += 'is very' + adjective3 sentence += 'I' +adverb2 sentence += 'you. Sincerely,' + newname sentence +='.</h2>';
document.write(sentence);
