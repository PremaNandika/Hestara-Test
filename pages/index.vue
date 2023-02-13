<template>
  <div class="bg-[#eff1f3]">
    <Header/>
    <NavBar/>
    <section class="pt-6">
      <div class="w-full max-w-[1240px] px-6 grid grid-cols-12 items-center mx-auto pb-12 relative z-20">
        <div class="md:col-span-6 pr-3 pt-[110px] pb-[383px]">
          <h1 class="font-bold text-[38.5px] pb-4">
            Buat Aplikasi mudah dan cepat hanya dalam beberapa Menit
          </h1>
          <p class="text-[16.8px] text-customGray pb-6">Kamu bisa membuat aplikasi untuk bisnismu dalam hitungan menit dengan tanpa pengetahuan pemrograman. Nikmati pengalaman baru dalam membuat aplikasi tanpa code program dengan performa yang baik dan stabil. Penasaran?</p>
          <UiCustomBtn paddingClass="py-4 px-12" text="Pelajari Lebih Lanjut"/>
        </div>
        <div class="md:col-span-6 pl-3">
          <img src="/images/Tablet_Pro_Mockup_10_.webp" class="w-full h-auto mb-12 pb-12" alt="">
        </div>
      </div>
    </section>
    <section class="relative w-full bg-white z-10">
      <svg width="100%" height="600px" xmlns="http://www.w3.org/2000/svg" class="-top-[550px] absolute"><path id="svg_1" d="m-12.66406,442.40068c352.72654,-76.36348 565.45337,5.45453 696.36219,19.99996c130.90882,14.54542 270.90852,-23.63632 367.27196,-47.27263c96.36344,-23.63631 379.99921,-154.54513 527.27163,-209.09047c147.27242,-54.54535 381.813,-92.55755 406.36076,-99.00598c12.27388,-3.22421 917.96684,-113.93032 715.00991,10.61478c-202.95693,124.5451 -210.46055,521.28714 -198.64021,540.29354c11.82034,19.0064 -2500.90899,-15.53962 -2500.0019,-16.36399c-0.90709,0.82437 -9.99798,-180.99343 -9.09089,-181.8178" stroke-opacity="null" stroke-width="0" stroke="#000" fill="#f7f8f9"></path> <path id="svg_2" d="m-116.90461,507.88064c314.5448,-112.72704 523.63527,-21.81814 878.17999,12.72724c354.54471,34.54538 632.72595,-225.45407 978.17978,-294.54484c172.72691,-34.54538 291.36195,-62.7275 368.52007,-78.40952c77.15812,-15.68202 352.84215,-22.50036 359.66142,-7.04537c13.63854,30.90997 97.72734,614.54347 50.90961,639.99858c-46.81772,25.4551 -855.68236,4.54593 -1433.63569,1.81866c-577.95334,-2.72727 -1155.90718,-5.45466 -1155.45364,-5.45491" stroke-opacity="null" stroke-width="0" stroke="#000" fill="#fbfcfc"></path> <path id="svg_3" d="m-115.93584,623.27542c234.54496,-132.72699 429.09001,-112.72703 678.1804,-83.63619c249.09039,29.09085 389.09011,30.90903 656.36228,-107.2725c267.27217,-138.18153 816.36193,-207.2723 1121.81584,-170.90873c305.45391,36.36356 -292.72666,-19.99996 -293.63778,-18.18228c71.36548,8.18218 627.05432,68.63506 626.48637,265.22584c-0.56794,196.59079 -20.11364,456.59134 -31.02284,531.13767c-10.90919,74.54633 -1561.82313,-36.3646 -1565.45948,-34.54642c-3.63636,1.81818 -1249.08831,-1.81818 -1248.18122,-1.81869c-0.90709,0.00051 39.09282,-234.54445 39.99992,-234.54496c-0.9071,0.00051 -4.54345,-76.36297 -3.63636,-76.36348" stroke-opacity="null" stroke-width="0" stroke="#000" fill="#ffffff"></path></svg>
      <div class="absolute w-full max-w-[1240px] px-6 left-1/2 -translate-x-1/2 grid grid-cols-12 h-20 -top-[320px] z-20 items-center">
        <div class="col-span-7 pr-10">
          <div class="grid grid-cols-2 items-center">
            <div class="pr-3 space-y-6">
              <div class="bg-white rounded-[0.375rem] p-8 pt-12 text-center justify-center shadow-lg">
                <img src="/images/drag_drop.svg" height="100" width="100px" class="mx-auto mb-6 pb-2" alt="">
                <h4 class="pb-2 text-xl font-semibold leading-7">
                  Drag and Drop UI Editor
                </h4>
                <p class="mb-5 text-customGray text-sm leading-[26px]">
                  Platform Hestara memiliki teknologi untuk membuat tampilan antar muka aplikasi tanpa code program, kamu cukup menggunakan editor dari Hestara untuk membuat tampilan aplikasi sesuai dengan keinginanmu.
                </p>
              </div>
              <div class="bg-white rounded-[0.375rem] p-8 pt-12 text-center justify-center shadow-lg">
                <img src="/images/api_creator.svg" height="100" width="100px" class="mx-auto mb-6 pb-2" alt="">
                <h4 class="pb-2 text-xl font-semibold leading-7">
                  API Creator
                </h4>
                <p class="mb-5 text-customGray text-sm leading-[26px]">
                  Teknologi ini dapat memberi kemudahan dalam integrasi sistem aplikasimu, dimana API akan di generate secara otomatis berdasarkan visualisasi yang sudah kamu buat.
                </p>
              </div>
            </div>
            <div class="pl-3">
               <div class="bg-white rounded-[0.375rem] p-8 pt-12 text-center justify-center shadow-lg">
                <img src="/images/visual.svg" height="100" width="100px" class="mx-auto mb-6 pb-2" alt="">
                <h4 class="pb-2 text-xl font-semibold leading-7">
                  Logic Visualitaion
                </h4>
                <p class="mb-5 text-customGray text-sm leading-[26px]">
                 Teknologi lainnya dari Hestara adalah dapat memvisualisasikan tipe pengguna dan fitur yang dapat digunakan pada aplikasimu. Teknologi Hestara akan memproses kode program secara otomatis sesuai dengan visualisasi yang kamu buat.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-5 pt-12 pl-6 text-customGray">
          <h2 class="text-[25px] leading-[1.3] font-semibold mt-12 pt-12 text-black">
            Implementasikan Ide Bisnis Digitalmu Sekarang!
          </h2>
          <span class="text-smleading-[26px]">NO CODE PROGRAM</span>
          <p class="mb-5 mt-4 text-[19px] leading-[26px]">Jangan biarkan pengembangan aplikasi menghambat ide bisnis digitalmu.</p>
          <p class="text-sm leading-[26px] pb-2 mb-6">
            Hestara hadir untuk memberikan solusi dan kemudahan untuk kamu yang ingin mengembangkan aplikasi secara profesional tanpa code program. Fitur-fitur pada platform Hestara memberikan kemudahan bagi kamu yang ingin mengembangkan bisnis digital agar menjadi sebuah aplikasi bisnis profesional.
          </p>
          <UiCustomBtn paddingClass="py-4 px-12" text="Pilih Layanan"/>
        </div>
      </div>
    </section>
  </div>
  <!-- <Tutorial /> -->
  <!-- <p class="text-6xl font-bold">Hello World</p> -->
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  data: () => ({
  })
})
</script>
