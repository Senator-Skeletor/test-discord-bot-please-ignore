module.exports = { 
    name: 'callgay',
    description: 'Calls user gay 1 to 5 times',
    execute(msg, args) {
        if(!args.length) {
            msg.channel.send(`Please place a word and a positive number >=1 or <=5 as arguments, ${msg.author} (i,e "!callGay John 7").\nPlease note I will floor all numbers to the nearest whole number. `);
        }

        else if(args.length > 2) {
            msg.channel.send('Please only put in one word and one number less than or equal to 5. "(e.g !callGay John 7")');
        }

        else {
            // checks first argument 
            if (!isNaN(Number(args[0]))) {
                return msg.channel.send(`The first argument , '${args[0]}', is a number. Don't be weird.`);
            }
            //  checks second argument
            if(isNaN(Number(args[1]))) {
                return msg.channel.send(`The second argument, '${args[1]}', is not a number. Don't be weird.`);
            }
            /* checks if number is in range. I mean i could do it in less lines by checking if the number 
               is in range while also checking if the second argument is a number but then you wouldn't
               get the funny haha error message */
            else if (Number(args[1]) <= 0 || Number(args[1]) >= 6) {
                return msg.channel.send('Positive numbers only >=1 and <=6, baby.');
            }
            else {
                for (let i = 0; i < Number(args[1]); i++) {
                    msg.channel.send(`${args[0]} is gay`);
                }
            }

        }
    }
};