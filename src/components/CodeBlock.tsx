import { DisplayTextAnimation } from '../lib/DisplayTextAnimation';

const CodeBlock = () => {
    return (
        <main className="">
            <div className="codeblock-container">
            <div className="codeblock-header">
                <p>index.html</p>
            </div>

                <div className="codeblock-body">
                    <p>
                        {DisplayTextAnimation("Hi, my names is Matěj Dušek, I am a currently studying IT with main focus on programming. Outside of school, I work on my personal projects, some of them are visible on my GitHub profile for example I've made message encryption program in C#, console-based mini RPG game in C# or this website, which is made with react. My main focus is on C# backend development, but I can work in Python, Web Technologies and I have basics of JavaScript. I'm commited to learning new languages and improving my skills in programming.", 1)}
                    </p>
                    



                    <div className="codeblock-line-numbers">
                            1<br/>
                            2<br/>
                            3<br/>
                            4<br/>
                            5<br/>
                            6<br/>
                            7<br/>
                            8<br/>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default CodeBlock;