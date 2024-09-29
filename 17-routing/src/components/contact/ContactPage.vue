<template>
    <div class="row justify-content-center">
        <div class="col-lg-9 col-md-8">
            <h4 class="mb-5 text-center">İletişim</h4>
            <form>
                <div class="row g-3">
                    <div class="col-sm-6">
                        <label for="name" class="form-label">Ad</label>
                        <input type="text" class="form-control" id="name" />
                    </div>
                    <div class="col-sm-6">
                        <label for="lastname" class="form-label">Soyad</label>
                        <input type="text" class="form-control" id="lastname" />
                    </div>
                </div>
                <div class="col-12">
                    <label for="email" class="form-label">E-Posta</label>
                    <input type="text" class="form-control" id="email" />
                </div>
                <div class="col-12">
                    <label for="subject" class="form-label">Konu</label>
                    <textarea name="subject" class="form-control" id="subject" rows="5"></textarea>
                </div>
                <hr class="my-4">
                <button class="w-100 btn btn-primary btn-lg">Gönder</button>
            </form>
        </div>
    </div>
</template>

<script setup>

</script>

<style></style>