<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'register'
}
</script>

<style lang="less" scoped>
.register-root{
    display: flex;
    flex-direction: column;

    min-width: 1000px;
    height: 100vh;

    background-color: white;
}
.header-wrap {
    min-width: 1000px;
    width: 100%;

    background-color: white;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);

    > header {
        display: flex;
        align-items: center;

        margin: 0px auto;
        width: 1000px;
        height: 100px;

        .imgWrap {
            display: flex;
            align-items: center;
            height: 100%;
            > img {
                max-height: 80%;
            }
        }

        > h3 {
            font-weight: 400;
        }

        .loginTip {
            margin-left: auto;

            font-size: 14px;

            > span {
                color: #e22;
            }
        }
    }
}
.main-wrap {
    min-width: 1000px;
    width: 100%;
    
    padding: 2em 0;
    

    
    main {
        display: flex;
        flex-direction: column;
        align-items: center;

        width: 1000px;
        margin: 0px auto;
        > .status {
            > .status-icon {
                display: grid;
                grid-template-columns: repeat(5, 1fr);
                justify-items: center;

                > :nth-child(odd) {
                    width: 30px;
                    height: 30px;

                    text-align: center;

                    border: 1px solid #e5e5e5;
                    border-radius: 50%;
                }

                > .normal {
                    > :nth-child(2) {
                        display: none;
                    }
                }

                > .currentStep {
                    color: white;

                    border: 1px solid #33bb44;
                    background-color: #33bb44;

                    > :nth-child(2) {
                        display: none;
                    }
                }

                > .stepComplete {
                    color: white;

                    border: 1px solid #33bb44;
                    background-color: #33bb44;

                    > :nth-child(1) {
                        display: none;
                    }
                }

                > .arrowComplete {
                    color: #33bb44;
                }
            }
            > .status-title {
                display: grid;
                grid-template-columns: repeat(5, 1fr);
                justify-items: center;

                margin-top: 10px;

                :nth-child(2) {
                    grid-column: 3;
                }

                :nth-child(3) {
                    grid-column: 5;
                }

                > span {
                    font-size: 12px;
                }

                > .complete,
                .current {
                    color: #33bb44;
                }
            }
        }

        > .register {
            margin-top: 40px;

            .register-phone {
                margin-bottom: 40px;
                > input,
                select {
                    vertical-align: middle;

                    padding: 0 1em;
                    height: 3em;

                    font-size: 16px;

                    outline: none;
                    border: 1px solid #dddddd;
                }
            }

            .register-code {
                display: flex;

                > input,
                button {
                    flex-grow: 1;
                    vertical-align: middle;

                    padding: 0 1em;
                    height: 3em;

                    font-size: 16px;

                    outline: none;
                    border: 1px solid #dddddd;
                }
            }

            .register-nextStep {
                margin-top: 40px;
                padding: 0.5em 0;

                color: white;
                text-align: center;

                background-color: #e22;
            }
        }
    }
}
footer {
    width: 1000px;
    height: 50px;
    margin: 0px auto;
    margin-top: auto;
    padding: 10px 0px;
    > ul {
        display: flex;
        justify-content: center;

        list-style: none;
        font-size: 10px;

        > :not(:last-child) {
            &::after {
                content: "";
                display: inline-block;

                width: 1px;
                height: 10px;
                margin: 0px 10px;

                vertical-align: middle;

                background-color: #cccccc;
            }
        }
    }
}
</style>