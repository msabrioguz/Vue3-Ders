<template>
    <nav class="col-md-2 bg-light d-block collapse sidebar">
                <div>
                    <ul class="nav">
                        <li class="nav-item">
                            <RouterLink :to="{name:'dashboard'}" class="nav-link">
                                <v-icon icon="mdi-view-dashboard"/>
                                <span>Kullanıcı Sayfası</span>
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink :to="{name:'profile'}" class="nav-link">
                                <v-icon icon="mdi-account"/>
                                <span>Profil</span>
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink :to="{name:'courses'}" class="nav-link">
                                <v-icon icon="mdi-note-outline"/>
                                <span>Kurslarım</span>
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink :to="{name:'addcourse'}" class="nav-link">
                                <v-icon icon="mdi-note-edit-outline"/>
                                <span>Kurs Ekle</span>
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </nav>
</template>

<script setup>
    
</script>

<style>
    
</style>