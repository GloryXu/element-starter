<template>
    <div>
        <el-row>
            <el-button>默认按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
            <el-button type="success">成功按钮</el-button>
            <el-button type="info">信息按钮</el-button>
            <el-button type="warning">警告按钮</el-button>
            <el-button type="danger">危险按钮</el-button>
        </el-row>
        <el-row>
            <el-button plain>朴素按钮</el-button>
            <el-button type="primary" plain>主要按钮</el-button>
            <el-button type="success" plain>成功按钮</el-button>
            <el-button type="info" plain>信息按钮</el-button>
            <el-button type="warning" plain>警告按钮</el-button>
            <el-button type="danger" plain>危险按钮</el-button>
        </el-row>

        <el-row>
            <el-button round>圆角按钮</el-button>
            <el-button type="primary" round>主要按钮</el-button>
            <el-button type="success" round>成功按钮</el-button>
            <el-button type="info" round>信息按钮</el-button>
            <el-button type="warning" round>警告按钮</el-button>
            <el-button type="danger" round>危险按钮</el-button>
        </el-row>
        <el-row>
            <el-button icon="el-icon-search" circle>球型按钮</el-button>
            <el-button type="primary" icon="el-icon-edit" circle></el-button>
            <el-button type="success" icon="el-icon-check" circle></el-button>
            <el-button type="info" icon="el-icon-message" circle></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle></el-button>
            <el-button type="danger" icon="el-icon-delete" circle></el-button>
        </el-row>

        <hr/>

        <el-row>
            <el-button disabled>默认按钮</el-button>
            <el-button type="primary" disabled>主要按钮</el-button>
            <el-button type="success" disabled>成功按钮</el-button>
            <el-button type="info" disabled>信息按钮</el-button>
            <el-button type="warning" disabled>警告按钮</el-button>
            <el-button type="danger" disabled>危险按钮</el-button>
        </el-row>

        <hr/>

        <el-button type="text">文字按钮</el-button>
        <el-button type="text" disabled>文字按钮</el-button>

        <hr/>
        <el-button type="primary" icon="el-icon-edit"></el-button>
        <el-button type="primary" icon="el-icon-share"></el-button>
        <el-button type="primary" icon="el-icon-delete"></el-button>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
        <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>

        <hr/>
        <el-button-group>
            <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
            <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
        </el-button-group>
        <el-button-group>
            <el-button type="primary" icon="el-icon-edit"></el-button>
            <el-button type="primary" icon="el-icon-share"></el-button>
            <el-button type="primary" icon="el-icon-delete"></el-button>
            <el-button type="primary" icon="el-icon-loading"></el-button>
        </el-button-group>
        <hr/>
        <el-button type="primary" :loading="true">加载中</el-button>
        <el-button type="primary" :loading="loading" @click="submit()">提交</el-button>
        <el-button type="success" :loading="true">加载中</el-button>
        <el-button type="warning" :loading="true">加载中</el-button>
        <el-button type="danger" :loading="true">加载中</el-button>
        <el-button type="info" :loading="true">加载中</el-button>
        <el-button type="text" :loading="true">加载中</el-button>

        <hr/>
        <el-row>
            <el-button>默认按钮</el-button>
            <el-button size="medium">中等按钮</el-button>
            <el-button size="small">小型按钮</el-button>
            <el-button size="mini">超小按钮</el-button>
        </el-row>
        <el-row>
            <el-button round>默认按钮</el-button>
            <el-button size="medium" round>中等按钮</el-button>
            <el-button size="small" round>小型按钮</el-button>
            <el-button size="mini" round>超小按钮</el-button>
        </el-row>

        <hr/>
        <i class="el-icon-edit"></i>
        <i class="el-icon-share"></i>
        <i class="el-icon-delete"></i>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
        <i class="el-icon-circle-close-outline"></i>
    </div>
</template>

<script>
    export default {
        data(){
            return {loading: false}
        },
        methods: {
            submit() {
                this.loading=true
            }
        }
    }
</script>