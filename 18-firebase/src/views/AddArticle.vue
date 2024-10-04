<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h1 class="text-center">Yeni Yazı Ekle</h1>
            <form>
                <div class="mb-3">
                    <label for="subject" class="form-label">Başlık</label>
                    <input type="text" class="form-control" id="subject">
                </div>
                <div class="mb-3">
                    <label for="content" class="form-label">İçerik</label>
                    <textarea type="text" class="form-control" id="content" rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-primary btn-lg">Ekle</button>
            </form>
        </div>
    </div>
</template>

<script setup>

</script>

<style></style>