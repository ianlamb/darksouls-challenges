'use strict';

var resultCount = 0;

$(function(){
    var modElem;

    for(var i = 0; i < modifiers.length; i++) {
        modElem = '<li><label><input type="checkbox" name="' + modifiers[i].name + '">' + modifiers[i].name + '</label></li>';
        if(modifiers[i].name.indexOf('Weapon Type:') >= 0) {
            $('#mods3').append(modElem);
        } else if(modifiers[i].name.indexOf('Class:') >= 0 || modifiers[i].name.indexOf('Max Level:') >= 0 || modifiers[i].name.indexOf('Cosplay:') >= 0) {
            $('#mods2').append(modElem);
        } else {
            $('#mods1').append(modElem);
        }
    }

    for(var key in difficulties) {
        var $option = $('<option value="' + key + '">' + difficulties[key] + '</option>');
        if (difficulties[key] === 'Experienced') {
            $option.attr('selected', 'selected');
        }
        $('#modDifficulty').append($option);
    }

    $('#toggleMods').click(function(){
        $('#modifiers').slideToggle();
    });
});

function randomize() {
    var chosenMods = [];
    var chosenTypes = [];
    var randNums = [];
    var randNum, mod, chosenDifficulty, difficultyTotal, difficultyOkay, typesOkay;
    var iterLimit = 10000;
    difficultyTotal = 0;
    chosenDifficulty = parseInt($('#modDifficulty').val());
    resultCount++;
    
    $('#output').prepend('<div id="cr' + resultCount + '" class="cr-result"><b>Challenge Run #' + resultCount + ':</b><ul></ul></div>');

    for(var x = 0; x < iterLimit; x++) {
        typesOkay = true;
        difficultyOkay = true;
        randNum = Math.floor((Math.random() * modifiers.length));
        if($.inArray(randNum, randNums) < 0) {
            for(var tIter = 0; tIter < modifiers[randNum].types.length; tIter++) { // mod currently being tested
                if($.inArray(modifiers[randNum].types[tIter], chosenTypes) >= 0) { // check each type against the types already selected
                    typesOkay = false;
                    break;
                }
            }

            if((difficultyTotal + parseInt(modifiers[randNum].difficulty)) > chosenDifficulty)
                difficultyOkay = false;

            if(typesOkay && difficultyOkay) {
                randNums.push(randNum);
                chosenMods.push(modifiers[randNum]);
                difficultyTotal += modifiers[randNum].difficulty;
                for(var tIter = 0; tIter < modifiers[randNum].types.length; tIter++)
                    chosenTypes.push(modifiers[randNum].types[tIter]);
            }
        }

        if(difficultyTotal == chosenDifficulty) {
            // at this point everything has been satisfied, the run has been created and we're ready to display the results
            console.debug("difficultyTotal: " + difficultyTotal);
            console.debug("chosenDifficulty: " + chosenDifficulty);
            break;
        }

        if(x == iterLimit-1) {
            //console.log("Randomization iteration limit exceeded.");
        }
    }

    for(var i = 0; i < chosenMods.length; i++) {
        mod = chosenMods[i];

        $('#cr' + resultCount + ' ul').append('<li class="' + getDifficultyClass(mod.difficulty) + '"><span data-tooltip aria-haspopup="true" class="has-tip top" data-disable-hover="false" tabindex="' + i + '" title="' + (mod.description || 'Self explanatory.') + '">' + mod.name + '</span></li>');
    }
    $('#cr' + resultCount).hide().slideDown();

    $(document).foundation();

    ga('send', {
        hitType: 'event',
        eventCategory: 'button',
        eventAction: 'click',
        eventLabel: 'randomize'
    });
}

function getDifficultyClass(diffVal) {
    switch(diffVal) {
        case 2:
            return "easy";
            break;
        case 4:
            return "medium";
            break;
        case 8:
            return "hard";
            break;
        case 16:
            return "insane";
            break;
        default:
            return "";
    }
}