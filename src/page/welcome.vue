<template>
    <div>
        <div id="app">
            <img src="../assets/logo.png">
        </div>
        <div>
            <div>
                <el-button @click="doClick(0)">Start</el-button>
            </div>
            <div>
                <el-input placeholder="请选择日期" suffix-icon="el-icon-date" style="width: 300px;"></el-input>
            </div>
            <div>
                <el-input placeholder="请选择日期" suffix-icon="el-icon-search" style="width: 300px;"></el-input>
            </div>
            <div>
                <el-button @click="doClick(1)">button样式</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            doClick(type) {
                switch (type) {
                    case 0: {
                        this.$notify({
                            title: 'It works!',
                            type: 'error',
                            message: 'We\'ve laid the ground work for you. It\'s time for you to build something epic!',
                            duration: 5000
                        })
                        break;
                    }
                    case 1: {// 按钮样式学习页面
                        this.$router.push({
                            name: 'button'
                        });
                        break;
                    }
                }

                /*this.$message({前端
                    title: '成功',
                    message: 'It works!',
                    type: 'error'
                })*/
            }
        }
    }

    {
        // 所声明的变量，只在let命令所在的代码块内有效
        let aaaaaaaaaaaaa = 10;
        var bbbbbbbbbbbbbbbbbb = 1;
    }

    // console.log(aaaaaaaaaaaaa) // ReferenceError: a is not defined.
    // console.log(bbbbbbbbbbbbbbbbbb) // 1

    var a = [];
    for (var i = 0; i < 10; i++) {
        a[i] = function () {
            console.log(i);
        };
    }
    a[6](); // 10

    var b = [];
    for (let i = 0; i < 10; i++) {
        b[i] = function () {
            console.log(i);
        };
    }
    b[6](); // 6

    for (let i = 0; i < 3; i++) {
        let i = 'abc';
        console.log(i);
    }

    /*for (let i = 0; i < 10; i++) {
        let i = 'abc2222222';
        console.log(i);
    }*/

    // var 的情况
    // console.log(foo); // 输出undefined
    // var foo = 2;
    //
    // let 的情况
    // console.log(bar); // 报错ReferenceError
    // let bar = 2;

    var tmp = 123;

    if (true) {
        tmp = 'abc'; // ReferenceError
        let tmp;
        console.log(tmp);
    }
</script>