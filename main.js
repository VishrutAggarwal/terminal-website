/** VARIABLES */

const r = document.querySelector(':root');

const themes ={
    'default': {
        'colorBackground': '#000000',
        'colorPrompt': '#00FF00',
        'colorCommand': '#00FFFF',
        'colorOutputPrimary': '#FFFFFF',
        'colorOutputSecondary': '#A4A4A4',
        'colorInput': '#FFFF00'
    },
    'light': {
        'colorBackground': '#F7F7F7',
        'colorPrompt': '#090300',
        'colorCommand': '#DB2D20',
        'colorOutputPrimary': '#01A0E4',
        'colorOutputSecondary': '#B5E4F4',
        'colorInput': '#01A252'
    },
    'dark': {
        'colorBackground': '#090300',
        'colorPrompt': '#A5A2A2',
        'colorCommand': '#DB2D20',
        'colorOutputPrimary': '#A16A94',
        'colorOutputSecondary': '#A5A2A2',
        'colorInput': '#01A252'
    },
    'summerday': {
        'colorBackground': '#f8f3ca',
        'colorPrompt': '#ffa3a2',
        'colorCommand': '#c4b441',
        'colorOutputPrimary': '#f27a5f',
        'colorOutputSecondary': '#fcdd95',
        'colorInput': '#8ee6a1'
    },
    'summernight': {
        'colorBackground': '#213756',
        'colorPrompt': '#da6175',
        'colorCommand': '#73841b',
        'colorOutputPrimary': '#c8cdbb',
        'colorOutputSecondary': '#7da497',
        'colorInput': '#a5c19b'
    },
    'winterday': {
        'colorBackground': '#d6e1e9',
        'colorPrompt': '#d17b73',
        'colorCommand': '#458282',
        'colorOutputPrimary': '#458282',
        'colorOutputSecondary': '#458282',
        'colorInput': '#458282'
    },
    'winternight': {
        'colorBackground': '#20284e',
        'colorPrompt': '#a84a5e',
        'colorCommand': '#ed987c',
        'colorOutputPrimary': '#9ec6c9',
        'colorOutputSecondary': '#69809e',
        'colorInput': '#649e91'
    },
    'springday': {
        'colorBackground': '#cef1ff',
        'colorPrompt': '#e13a6a',
        'colorCommand': '#ff4adc',
        'colorOutputPrimary': '#3dff98',
        'colorOutputSecondary': '#3df9ea',
        'colorInput': '#738d9d'
    },
    'springnight': {
        'colorBackground': '#0e0e0e',
        'colorPrompt': '#f50078',
        'colorCommand': '#8e1cc7',
        'colorOutputPrimary': '#0aff52',
        'colorOutputSecondary': '#00f7ff',
        'colorInput': '#4e6ea8'
    },
    'autumnday': {
        'colorBackground': '#ffd5cc',
        'colorPrompt': '#ff4764',
        'colorCommand': '#c70083',
        'colorOutputPrimary': '#e04f0b',
        'colorOutputSecondary': '#ff9393',
        'colorInput': '#00cf2d'
    },
    'autumnnight': {
        'colorBackground': '#00033c',
        'colorPrompt': '#ad005f',
        'colorCommand': '#8e1cc7',
        'colorOutputPrimary': '#00bbff',
        'colorOutputSecondary': '#00228f',
        'colorInput': '#48ff00'
    },
}

const banner = [
    [],
    [
        " _  _  _  _  _  _  _  _  _  _  _  _  _  _  _  _  _  _  _  _  _  _  _  _  _  _  _  _  _  _  _  _  _ ",
        "(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)",
        "(_)(_)(_)(_)                                                                           (_)(_)(_)(_)",
        "(_)(_)(_)(_)        (`-.             .-')    ('-. .-. _  .-')              .-') _      (_)(_)(_)(_)",
        "(_)(_)(_)(_)      _(OO  )_          ( OO ). ( OO )  /( \\( -O )            (  OO) )     (_)(_)(_)(_)",
        "(_)(_)(_)(_)  ,--(_/   ,. \\ ,-.-') (_)---\\_),--. ,--. ,------. ,--. ,--.  /     '._    (_)(_)(_)(_)",
        "(_)(_)(_)(_)  \\   \\   /(__/ |  |OO)/    _ | |  | |  | |   /`. '|  | |  |  |'--...__)   (_)(_)(_)(_)",
        "(_)(_)(_)(_)   \\   \\ /   /  |  |  \\\\  :` `. |   .|  | |  /  | ||  | | .-')'--.  .--'   (_)(_)(_)(_)",
        "(_)(_)(_)(_)    \\   '   /,  |  |(_/ '..`''.)|       | |  |_.' ||  |_|( OO )  |  |      (_)(_)(_)(_)",
        "(_)(_)(_)(_)     \\     /__),|  |_.'.-._)   \\|  .-.  | |  .  '.'|  | | `-' /  |  |      (_)(_)(_)(_)",
        "(_)(_)(_)(_)      \\   /   (_|  |   \\       /|  | |  | |  |\\  \\('  '-'(_.-'   |  |      (_)(_)(_)(_)",
        "(_)(_)(_)(_)       `-'      `--'    `-----' `--' `--' `--' '--' `-----'      `--'      (_)(_)(_)(_)",
        "(_)(_)(_)(_) _  _  _  _  _  _  _  _  _  _  _  _  _  _  _  _  _  _  _  _  _  _  _  _  _ (_)(_)(_)(_)",
        "(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)"

    ],
    [
        " _____                                                                                     _____ ",
        "( ___ )-----------------------------------------------------------------------------------( ___ )",
        " |   |                                                                                     |   | ",
        " |   | ``____````____``__```````_______.`__````__``.______```````__````__``.___________.`` |   | ",
        " |   | ``\\```\\\``/```/`|``|`````/```````||``|``|``|`|```_``\\`````|``|``|``|`|```````````|`` |   | ",
        " |   | ```\\```\\/```/``|``|````|```(----`|``|__|``|`|``|_)``|````|``|``|``|``---|``|----``` |   | ",
        " |   | ````\\``````/```|``|````\\````|```__```|`|``````/`````|``|``|``|`````|``|``````` |   | ",
        " |   | `````\\````/````|``|`.----)```|```|``|``|``|`|``|\\``\\----.|```--'``|`````|``|``````` |   | ",
        " |   | ``````\\__/`````|__|`|_______/````|__|``|__|`|`_|``._____|`\\______/``````|__|``````` |   | ",
        " |___|                                                                                     |___| ",
        "(_____)-----------------------------------------------------------------------------------(_____)"
    ],
    [
        " .--..--..--..--..--..--..--..--..--..--..--..--..--..--..--..--..--..--..--..--..--..--..--..--..--..--..--. ",
        "/ .. \\.. \\.. \\.. \\.. \\.. \\.. \\.. \\.. \\.. \\.. \\.. \\.. \\.. \\.. \\.. \\.. \\.. \\.. \\.. \\.. \\.. \\.. \\.. \\.. \\.. \\.. \\",
        "\\ \\/\\ `'\\ `'\\ `'\\ `'\\ `'\\ `'\\ `'\\ `'\\ `'\\ `'\\ `'\\ `'\\ `'\\ `'\\ `'\\ `'\\ `'\\ `'\\ `'\\ `'\\ `'\\ `'\\ `'\\ `'\\ `'\\ \\/ /",
        " \\/ /`--'`--'`--'`--'`--'`--'`--'`--'`--'`--'`--'`--'`--'`--'`--'`--'`--'`--'`--'`--'`--'`--'`--'`--'`--'\\/ / ",
        " / /\\                             .       .x+=:.                                                s        / /\\ ",
        "/ /\\ \\                           @88>    z`    ^%    .uef^\"                                    :8       / /\\ \\",
        "\\ \\/ /         ...     ..        %8P        .   &lt;k :d88E          .u    .      x.    .        .88       \\ \\/ /",
        " \\/ /       :~\"\"888h.:^\"888:      .       .@8Ned8\" `888E        .d88B :@8c   .@88k  z88u     :888ooo     \\/ / ",
        " / /\\      8X   `8888X  8888>   .@88u   .@^%8888\"   888E .z8k  =\"8888f8888r ~\"8888 ^8888   -*8888888     / /\\ ",
        "/ /\\ \\    X888n. 8888X  ?888>  ''888E` x88:  `)8b.  888E~?888L   4888>'88\"    8888  888R     8888       / /\\ \\",
        "\\ \\/ /    '88888 8888X   ?**h.   888E  8888N=*8888  888E  888E   4888> '      8888  888R     8888       \\ \\/ /",
        " \\/ /       `*88 8888~ x88x.     888E   %8\"    R88  888E  888E   4888>        8888  888R     8888        \\/ / ",
        " / /\\      ..<\"  88*`  88888X    888E    @8Wou 9%   888E  888E  .d888L .+     8888 ,888B .  .8888Lu=     / /\\ ",
        "/ /\\ \\        ..XC.    `*8888k   888&  .888888P`    888E  888E  ^\"8888*\"     \"8888Y 8888\"   ^%888*      / /\\ \\",
        "\\ \\/ /      :888888H.    `%88>   R888\" `   ^\"F     m888N= 888>     \"Y\"        `Y\"   'YP       'Y\"       \\ \\/ /",
        " \\/ /      <  `\"888888:    X\"     \"\"                `Y\"   888                                            \\/ / ",
        " / /\\            %888888x.-`                             J88\"                                            / /\\ ",
        "/ /\\ \\             \"\"**\"\"                                @%                                             / /\\ \\",
        "\\ \\/ /                                                 :\"                                               \\ \\/ /",
        " \\/ /                                                                                                    \\/ / ",
        " / /\\.--..--..--..--..--..--..--..--..--..--..--..--..--..--..--..--..--..--..--..--..--..--..--..--..--./ /\\ ",
        "/ /\\ \\.. \\.. \\.. \\.. \\.. \\.. \\.. \\.. \\.. \\.. \\.. \\.. \\.. \\.. \\.. \\.. \\.. \\.. \\.. \\.. \\.. \\.. \\.. \\.. \\.. \\/\\ \\",
        "\\ `'\\ `'\\ `'\\ `'\\ `'\\ `'\\ `'\\ `'\\ `'\\ `'\\ `'\\ `'\\ `'\\ `'\\ `'\\ `'\\ `'\\ `'\\ `'\\ `'\\ `'\\ `'\\ `'\\ `'\\ `'\\ `'\\ `' /",
        " `--'`--'`--'`--'`--'`--'`--'`--'`--'`--'`--'`--'`--'`--'`--'`--'`--'`--'`--'`--'`--'`--'`--'`--'`--'`--'`--' "
    ]
]

const errors = [
    'Command not found. Type "<span class="command">help</span>" for a list of commands.',
    'Too many arguments.',
    'Too few arguments.',
    'Argument should be an integer.',
    'Argument is out of range.',
    'This command has no arguments.'
]

const help = [
    '<span class="command">banner</span><span class="tabspace">              </span><span class="secondary-text">Display banner. Range: 1-3',
    '<span class="command">theme</span><span class="tabspace">                </span><span class="secondary-text">Change theme.',
    '<span class="command">whois</span><span class="tabspace">               </span><span class="secondary-text">Who is Vishrut?',
    '<span class="command">whoami</span><span class="tabspace">              </span><span class="secondary-text">Display current user',
    '<span class="command">projects</span><span class="tabspace">            </span><span class="secondary-text">View coding projects',
    '<span class="command">socials</span><span class="tabspace">             </span><span class="secondary-text">Display socials',
    '<span class="command">portfolio</span><span class="tabspace">           </span><span class="secondary-text">Redirect to Portfolio website',
    '<span class="command">clear</span><span class="tabspace">               </span><span class="secondary-text">Clear the terminal',
    '<span class="command">history</span><span class="tabspace">             </span><span class="secondary-text">Display command history',
]

const socials = [
    '<span class="primary-text">github</span><span class="tabspace">              </span><a href="https://github.com/vishrutaggarwal"><span class="secondary-text">github.com/vishrutaggarwal</span></a>',
    '<span class="primary-text">linkedin</span><span class="tabspace">            </span><a href="https://linkedin.com/in/vishrut-aggarwal/"><span class="secondary-text">linkedin.com/in/vishrut-aggarwal</span></a>',
    '<span class="primary-text">twitter</span><span class="tabspace">             </span><a href="https://twitter.com/aggarwalvishrut"><span class="secondary-text">twitter.com/aggarwalvishrut</span></a>'
]

const projects = [
    '<span class="primary-text">Terminal Website</span><span class="tabspace">    </span><span class="secondary-text">A portfolio website in the form of a terminal</span>',
    '<span class="primary-text">Space Invaders</span><span class="tabspace">      </span><span class="secondary-text">A space invaders game made in python using pygame</span>'
]

const whois = [
    'Vishrut Aggarwal is a software developer from India.',
    'He is passionate about building solutions that makes a difference.',
    '',
    'His skill repoirtoire includes:'
]

const skills = [
    'Web Development',
    'Software Automation',
    'Data Science',
    'Game Development'
]

const prompt = '<span id="prompt" class="top-margin">guest@vishrut:~$ </span>';

output = document.getElementById('terminal-output');
const history = new Array();









/** FUNCTIONS */









function changeTheme(theme) {

    switch(theme) {
        case 'light':
            newTheme = themes.light;
            break;

        case 'dark':
            newTheme = themes.dark;
            break;

        case 'summerday':
            newTheme = themes.summerday;
            break;
        
        case 'summernight':
            newTheme = themes.summernight;
            break;

        case 'winterday':
            newTheme = themes.winterday;
            break;

        case 'winternight':
            newTheme = themes.winternight;
            break;

        case 'springday':
            newTheme = themes.springday;
            break;

        case 'springnight':
            newTheme = themes.springnight;
            break;

        case 'autumnday':
            newTheme = themes.autumnday;
            break;

        case 'autumnnight':
            newTheme = themes.autumnnight;
            break;

        default:
            newTheme = themes.default;
            break;
    }

    r.style.setProperty('--color-background', newTheme.colorBackground);
    r.style.setProperty('--color-prompt', newTheme.colorPrompt);
    r.style.setProperty('--color-command', newTheme.colorCommand);
    r.style.setProperty('--color-output-primary', newTheme.colorOutputPrimary);
    r.style.setProperty('--color-output-secondary', newTheme.colorOutputSecondary);
    r.style.setProperty('--color-input', newTheme.colorInput);
}

function checkForArguments(whole, numOfArguments) {
    if(whole.length > 1 + numOfArguments) {
        return 'more';
    } else if (whole.length < 1 + numOfArguments) {
        return 'less';
    } else  if (whole.length == 1 + numOfArguments) {
        return 'equal';
    }
}

function command(cmd) {

    commandLine = cmd.trim().split(' ');

    switch(commandLine[0].toLowerCase()) {
        case 'help':
            if (checkForArguments(commandLine, 0) == 'more') {
                display(errors[5]);
            } else {
                for (let i = 0; i < help.length; i++) {
                    display(help[i]);
                }
            }
            break;

        case 'clear':
            if (checkForArguments(commandLine, 0) == 'more') {
                display(errors[5]);
            } else {
                output.innerHTML = '';
            }
            break;

        case 'banner':
            if (checkForArguments(commandLine, 1) === 'equal') {
                
                const arg = parseInt(commandLine[1]);                                                        // Convert argument to integer
                
                if (isNaN(arg)) {                                                                            // Check if argument is a number
                    display(errors[3]);
                } else if (arg >= banner.length || arg <= 0) {                                               // Check if argument is in range
                    display(errors[4]);
                } else {                                                                                     // Display banner
                    for (let i = 0; i < banner[arg].length; i++) {
                        display('<span class="banner secondary-text">' + banner[arg][i] + '</span>');
                    }
                }
            } else if (checkForArguments(commandLine, 1) === 'more') {
                display(errors[1]);
            } else if (checkForArguments(commandLine, 1) === 'less') {
                display(errors[2]);
            }
            break;

        case 'theme':
            if (checkForArguments(commandLine, 1) == 'equal') {
                changeTheme(commandLine[1]);
            } else if (checkForArguments(commandLine, 1) == 'more') {
                display(errors[1]);
            } else if (checkForArguments(commandLine, 1) == 'less') {
                display(errors[2]);
                display(' Syntax: <span class="command">theme</span> <span class="secondary-text">[themeName]</span>');
                display('');
                display('Available themes:');
                for (const [key, value] of Object.entries(themes)) {
                    display('<span class="secondary-text">' + key + '</span>');
                }
            }
            break;

        case 'whois':
            if (checkForArguments(commandLine, 0) == 'more') {
                display(errors[5]);
            } else {
                for (let i = 0; i < whois.length; i++) {
                    display(whois[i]);
                }
                for (let i = 0; i < skills.length; i++) {
                    display('<span class="secondary-text">' + skills[i] + '</span>');
                }
            }
            break;
            
        case 'whoami':
            if (checkForArguments(commandLine, 0) == 'more') {
                display(errors[5]);
            } else {
                display('guest')
            }
            break;

        case 'history':
            if (checkForArguments(commandLine, 0) == 'more') {
                display(errors[5]);
            } else {
                for (let i = 0; i < history.length; i++) {
                    display(history[i]);
                }
            }
            break;

        case 'projects':
            if (checkForArguments(commandLine, 0) == 'more') {
                display(errors[5]);
            } else {
                for (let i = 0; i < projects.length; i++) {
                    display(projects[i]);
                }
            }
            break;

        case 'socials':
            if (checkForArguments(commandLine, 0) == 'more') {
                display(errors[5]);
            } else {
                for (let i = 0; i < socials.length; i++) {
                    display(socials[i]);
                }
            }
            break;

        case 'secret':
            // secret;
            break;

        case 'portfolio':
            if (checkForArguments(commandLine, 0) == 'more') {
                display(errors[5]);
            } else {
                display('Redirecting to portfolio...');
                window.location.replace("https://portfolio.vishrut.co");
            }
            break;

        default:
            return false;
    }
    return true;
}

function display(text) {
    output.innerHTML += text + '<br>';
}

function checkForEnter(e, Object) {
    
    if (e.key === 'Enter') {
        text = Object.value;
        Object.value = '';

        e.preventDefault()
        display(prompt + '<span class="tabspace"> </span>' + '<span class="terminal-text">' + text + '</span>')

        is_command = command(text);

        if (is_command) {
            history.push('<span class="command">' + text + '</span>');
        } else {
            display("Command not found. Type 'help' for a list of commands.")
        }
    }
}

changeTheme('default');