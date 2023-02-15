<template>
  <div class="bg-[#eff1f3]">
    <Header/>
    <NavBar/>
    <section class="pt-6 relative z-20">
      <div class="w-full max-w-[1240px] px-6 grid grid-cols-12 items-center mx-auto pb-12 relative">
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
    <section class="relative w-full h-auto bg-white z-10">
      <svg width="100%" height="600px" xmlns="http://www.w3.org/2000/svg" class="-top-[550px] absolute"><path id="svg_1" d="m-12.66406,442.40068c352.72654,-76.36348 565.45337,5.45453 696.36219,19.99996c130.90882,14.54542 270.90852,-23.63632 367.27196,-47.27263c96.36344,-23.63631 379.99921,-154.54513 527.27163,-209.09047c147.27242,-54.54535 381.813,-92.55755 406.36076,-99.00598c12.27388,-3.22421 917.96684,-113.93032 715.00991,10.61478c-202.95693,124.5451 -210.46055,521.28714 -198.64021,540.29354c11.82034,19.0064 -2500.90899,-15.53962 -2500.0019,-16.36399c-0.90709,0.82437 -9.99798,-180.99343 -9.09089,-181.8178" stroke-opacity="null" stroke-width="0" stroke="#000" fill="#f7f8f9"></path> <path id="svg_2" d="m-116.90461,507.88064c314.5448,-112.72704 523.63527,-21.81814 878.17999,12.72724c354.54471,34.54538 632.72595,-225.45407 978.17978,-294.54484c172.72691,-34.54538 291.36195,-62.7275 368.52007,-78.40952c77.15812,-15.68202 352.84215,-22.50036 359.66142,-7.04537c13.63854,30.90997 97.72734,614.54347 50.90961,639.99858c-46.81772,25.4551 -855.68236,4.54593 -1433.63569,1.81866c-577.95334,-2.72727 -1155.90718,-5.45466 -1155.45364,-5.45491" stroke-opacity="null" stroke-width="0" stroke="#000" fill="#fbfcfc"></path> <path id="svg_3" d="m-115.93584,623.27542c234.54496,-132.72699 429.09001,-112.72703 678.1804,-83.63619c249.09039,29.09085 389.09011,30.90903 656.36228,-107.2725c267.27217,-138.18153 816.36193,-207.2723 1121.81584,-170.90873c305.45391,36.36356 -292.72666,-19.99996 -293.63778,-18.18228c71.36548,8.18218 627.05432,68.63506 626.48637,265.22584c-0.56794,196.59079 -20.11364,456.59134 -31.02284,531.13767c-10.90919,74.54633 -1561.82313,-36.3646 -1565.45948,-34.54642c-3.63636,1.81818 -1249.08831,-1.81818 -1248.18122,-1.81869c-0.90709,0.00051 39.09282,-234.54445 39.99992,-234.54496c-0.9071,0.00051 -4.54345,-76.36297 -3.63636,-76.36348" stroke-opacity="null" stroke-width="0" stroke="#000" fill="#ffffff"></path></svg>
      <div class="relative w-full max-w-[1240px] px-6 left-1/2 -translate-x-1/2 grid grid-cols-12 -top-[280px] items-center h-auto">
        <div class="col-span-7 pr-10">
          <div class="grid grid-cols-2 items-center">
            <div class="relative pr-3 space-y-6">
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
          <span class="text-sm leading-[26px]">NO CODE PROGRAM</span>
          <p class="mb-5 mt-4 text-[19px] leading-[26px]">Jangan biarkan pengembangan aplikasi menghambat ide bisnis digitalmu.</p>
          <p class="text-sm leading-[26px] pb-2 mb-6">
            Hestara hadir untuk memberikan solusi dan kemudahan untuk kamu yang ingin mengembangkan aplikasi secara profesional tanpa code program. Fitur-fitur pada platform Hestara memberikan kemudahan bagi kamu yang ingin mengembangkan bisnis digital agar menjadi sebuah aplikasi bisnis profesional.
          </p>
          <UiCustomBtn paddingClass="py-4 px-12" text="Pilih Layanan"/>
        </div>
      </div>
    </section>
    <section class="relative w-full z-10 bg-[#eff1f3] h-[122px] -top-[150px]">
      <svg width="100%" height="298" xmlns="http://www.w3.org/2000/svg" class="absolute -top-[255px] z-0" data-v-55738782=""><path id="svg_3" d="m-79.33393,-38.33344c20.00001,16.00001 346.66686,448.00024 826.66712,236.00013c240.00013,-106.00006 647.58388,-25.45831 786.45913,6.2709c138.87524,31.72921 295.36054,26.21434 359.54203,2.72919c64.18149,-23.48515 718.67317,-158.11072 742.33982,-143.77728c214.66852,222.83259 61.00168,333.66623 77.22357,376.2222c16.22188,42.55598 -2796.23167,-33.44489 -2795.56445,-33.77815c-0.33361,0.16663 -0.83375,-98.08344 -1.16708,-196.41683c-0.33334,-98.33338 -0.49987,-196.75009 -0.16626,-196.91671" stroke-width="0" stroke="#000" fill="#eff1f3" data-v-55738782=""></path></svg>
    </section>
    <section class="relative w-full bg-white z-20 -top-[100px] h-auto text-customGray ">
      <svg width="100%" height="298" xmlns="http://www.w3.org/2000/svg" class="absolute -top-[260px] z-0"><path id="svg_2" fill="#FFF" stroke="#000" stroke-width="0" d="m-19.87006,126.33922c0,0 2.16796,-1.48437 6.92379,-3.91356c4.75584,-2.42918 12.09956,-5.80319 22.45107,-9.58247c20.70303,-7.55856 53.43725,-16.7382 101.56202,-23.22255c48.12477,-6.48434 111.6401,-10.27339 193.90533,-7.05074c41.13262,1.61132 88.20271,5.91306 140.3802,12.50726c52.17748,6.59421 -86.4742,-15.61273 171.02458,26.26208c64.37469,10.4687 130.09704,0.19531 175.01626,-5.4736c44.91922,-5.66892 49.93384,-12.28022 191.44685,-45.34647c141.51301,-33.06625 221.34662,-61.99188 426.81438,-59.4919c102.73388,1.24999 203.44102,29.65927 398.99543,109.88821c195.55441,80.22895 668.78972,-44.38181 814.0537,-9.88704c-76.25064,69.23438 407.49874,281.32592 331.2481,350.5603c-168.91731,29.52009 85.02254,247.61162 -83.89478,277.13171c84.07062,348.27313 -2948.95065,-242.40222 -2928.39024,-287.84045"></path></svg>
      <div class="relative w-full max-w-[1240px] px-6 mx-auto grid grid-cols-12 pb-10">
        <div class="col-span-12 justify-center text-center mb-6">
          <h2 class="text-[25px] leading-[42px] font-semibold text-black">
            Layanan Kami
          </h2>
          <p class="text-sm leading-[26px] mb-5">Sesuaikan layanan yang kamu butuhkan untuk digitalisasi bisnismu</p>
        </div>
        <div class="col-span-12 grid grid-cols-3">
          <div class="p-12 text-center shadow-xl mr-3 rounded-md h-[364px]">
            <h4  class="leading-[27px] text-[19px] text-gray-900 font-semibold mb-4">Creator Web</h4>
            <p class="text-sm leading-[26px] mb-5 text-center">Merupakan platform yang membantu User dalam membuat tampilan website secara <b>full</b> custom untuk menghasilkan code program dan tampilan website secara <b>otomatis</b>.</p>
            <UiCustomBtn text="Pelajari Lebih Lanjut" paddingClass="py-4 px-12 mb-12"/>
          </div>
           <div class="p-12 text-center shadow-xl mx-3 rounded-md mt-12 h-[364px]">
            <h4  class="leading-[27px] text-[19px] text-gray-900 font-semibold mb-4">Creator System</h4>
            <p class="text-sm leading-[26px] mb-5 text-center">Merupakan platform yang membantu User dalam memvisualisasikan kebutuhan dan <b>logika</b> aplikasi untuk diproses menjadi <b>kode program</b> dan API secara <b>otomatis</b>.</p>
            <UiCustomBtn text="Pelajari Lebih Lanjut" paddingClass="py-4 px-12 mb-12"/>
          </div>
           <div class="p-12 text-center shadow-xl ml-3 rounded-md h-[364px]">
            <h4  class="leading-[27px] text-[19px] text-gray-900 font-semibold mb-4">Software Consultant</h4>
            <p class="text-sm leading-[26px] mb-5 text-center">Merupakan service yang disediakan oleh Hestara untuk kamu yang membutuhkan brainstroming ide atau diskusi mengenai konsep aplikasi yang akan dibangun.</p>
            <UiCustomBtn text="Pelajari Lebih Lanjut" paddingClass="py-4 px-12 mb-12"/>
          </div>
        </div>
      </div>
    </section>
    <section class="relative w-full bg-white z-10 h-auto text-customGray pt-[150px] -top-[100px]">
      <div class="w-full max-w-[1240px] justify-center text-center mx-auto">
        <h2 class="text-[25px] leading-[42px] font-semibold text-black">
           Langkah Mudah Release Aplikasi
        </h2>
        <p class="relative text-sm leading-[26px] mb-5">4 tahap mudah yang dapat Kamu lakukan untuk mengimplementasikan aplikasi secara mudah dan cepat</p>
        <div class="mt-14 h-[241px] grid grid-cols-4 gap-x-3 relative">
          <div class="relative flex flex-col items-center px-1.5 customProcess">
            <div class="w-1/2 h-[2px] bg-[#ededed] absolute bottom-[80%] left-3/4"></div>
            <div class="text-black flex h-[90px] w-[90px] leading-5 hover:bg-purple hover:text-white transition border-2 border-purple rounded-full justify-center items-center text-2xl">
              <strong>01</strong>
            </div>
            <div class="pt-5">
              <h4 class="leading-[1.5rem] text-[21px] text-gray-900 font-bold">Ideation</h4>
              <p class="relative text-sm leading-[26px] mb-5">Deskripsikan ide yang Kamu miliki secara singkat dan jelas agar mudah dipahami</p>
            </div>
          </div>
          <div class="relative flex flex-col items-center px-1.5">
            <div class="w-1/2 h-[2px] bg-[#ededed] absolute bottom-[80%] left-3/4"></div>
            <div class="text-black flex h-[90px] w-[90px] leading-5 hover:bg-purple hover:text-white transition border-2 border-purple rounded-full justify-center items-center text-2xl">
              <strong>02</strong>
            </div>
            <div class="pt-5">
              <h4 class="leading-[1.5rem] text-[21px] text-gray-900 font-bold">Consultation</h4>
              <p class="relative text-sm leading-[26px] mb-5">Kamu bisa menghubungi <a href="tel:+6285162900414" class="text-purple">admin Hestara</a> untuk menentukan jadwal konsultasi secara online maupun offline meeting</p>
            </div>
          </div>
          <div class="relative flex flex-col items-center px-1.5">
            <div class="w-1/2 h-[2px] bg-[#ededed] absolute bottom-[80%] left-3/4"></div>
            <div class="text-black flex h-[90px] w-[90px] leading-5 hover:bg-purple hover:text-white transition border-2 border-purple rounded-full justify-center items-center text-2xl">
              <strong>03</strong>
            </div>
            <div class="pt-5">
              <h4 class="leading-[1.5rem] text-[21px] text-gray-900 font-bold">Registration</h4>
              <p class="relative text-sm leading-[26px] mb-5">setelah memutuskan jenis aplikasi yang ingin dibuat, tahap selanjutnya adalah kamu bisa melakukan registrasi dan memilih package yang sesuai dengan kebutuhan aplikasimu</p>
            </div>
          </div>
          <div class="relative flex flex-col items-center px-1.5">
            <div class="text-black flex h-[90px] w-[90px] leading-5 hover:bg-purple hover:text-white transition border-2 border-purple rounded-full justify-center items-center text-2xl">
              <strong>04</strong>
            </div>
            <div class="pt-5">
              <h4 class="leading-[1.5rem] text-[21px] text-gray-900 font-bold">Release</h4>
              <p class="relative text-sm leading-[26px] mb-5">Registrasimu sudah berhasil. Sekarang kamu bisa merealisasikan aplikasimu dengan memanfaatkan layanan <a href="/creator-web" class="text-purple">Creator Web</a> dan <a href="/" class="text-purple">Creator System</a> Hestara</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="relative top-[-250px] bg-white z-30 w-full">
      <svg width="100%" height="284" xmlns="http://www.w3.org/2000/svg" class="abolute top-[-236px]" data-v-479b32c7=""><path id="svg_2" fill="#eff1f3" stroke="#000" stroke-width="0" d="m-30.75698,18.18081c99.6013,28.33304 337.54319,327.06425 868.97187,168.96887c265.71434,-79.04769 585.03969,-5.59538 690.67474,14.9602c105.63504,20.55559 381.87048,2.11063 555.67444,-75.27753c86.90199,-38.69407 736.04117,-78.60276 742.95015,12.26524c6.90898,90.86801 -66.08835,361.6009 -103.97283,363.40912c-37.88449,1.80823 -2793.7397,-55.67435 -2792.62804,-56.56315" data-v-479b32c7=""></path></svg>
      <div class="h-auto bg-[#eff1f3] w-full">
        <div class="w-full max-w-[1240px] px-6 mx-auto relative text-customGray -bottom-[100px]">

          <div class="text-center pb-[40px]">
            <span class="text-sm leading-[26px]">Harga Layanan</span>
            <h2 class="text-[25px] leading-[1.3] font-bold text-black">
              Rekomendasi Paket Layanan
            </h2>
          </div>
          <div class="flex" >
            <div class="bg-white mx-3 h-[741px] w-1/3 overflow-hidden relative rounded-[10px] shadow-xl">
              <div class="pt-12 px-6 pb-4 items-center">
                <h4 class="mt-5 mb-2 leading-[1.5rem] text-[21px] text-black font-bold text-center">Early Stage</h4>
                <p class="text-sm leading-[26px] text-white text-opacity-60 text-center">
                  Description About
                </p>
              </div>
              <div class="py-3 px-8 w-full h-auto">
                <li class="flex items-center justify-center border-b border-black">
                  <p class="text-sm leading-[2.9rem] text-black font-bold text-center">
                    Creator Web
                  </p>
                </li>
                <li class="flex items-center justify-center border-b border-black" v-for="(paketDetails, idx) in paketBusinesses[2].creatorWeb" :key="idx">
                  <p class="text-sm leading-[2.9rem] text-black text-center">
                    {{paketBusinesses[2].creatorWeb[idx]}}
                  </p>
                </li>
                <li class="flex items-center justify-center border-b border-black">
                  <p class="text-sm leading-[2.9rem] text-black font-bold text-center">
                    Creator System
                  </p>
                </li>
                <li class="flex items-center justify-center border-b border-black" v-for="(paketDetails, idx) in paketBusinesses[2].creatorSystem" :key="idx">
                  <p class="text-sm leading-[2.9rem] text-black text-center">
                    {{paketBusinesses[2].creatorSystem[idx]}}
                  </p>
                </li>
              </div>
              <div class="w-full flex">
                <UiCustomBtn paddingClass="py-4 px-12 mx-auto mt-6" text="Langganan"/>
              </div>
            </div>
            <div class="bg-purple mx-3 h-auto w-1/3 overflow-hidden relative rounded-[10px] shadow-xl">
              <span class="bg-[#ccc] rotate-[36deg] absolute font-bold text-sm leading-[2.3rem] w-[55%] text-center text-white right-[-55px] top-5">Popular</span>
              <div class="pt-12 px-6 pb-4 items-center">
                <h4 class="mt-5 mb-2 leading-[1.5rem] text-[21px] text-white font-bold text-center">Early Stage</h4>
                <p class="text-sm leading-[26px] text-white text-opacity-60 text-center">
                  Description About
                </p>
              </div>
              <div class="py-3 px-8 w-full">
                <li class="flex items-center justify-center border-b border-[#ededed]">
                  <p class="text-sm leading-[2.9rem] text-white font-bold text-center">
                    Creator Web
                  </p>
                </li>
                <li class="flex items-center justify-center border-b border-[#ededed]" v-for="(paketDetails, idx) in paketBusinesses[1].creatorWeb" :key="idx">
                  <p class="text-sm leading-[2.9rem] text-white text-center">
                    {{paketBusinesses[1].creatorWeb[idx]}}
                  </p>
                </li>
                <li class="flex items-center justify-center border-b border-[#ededed]">
                  <p class="text-sm leading-[2.9rem] text-white font-bold text-center">
                    Creator System
                  </p>
                </li>
                <li class="flex items-center justify-center border-b border-[#ededed]" v-for="(paketDetails, idx) in paketBusinesses[1].creatorSystem" :key="idx">
                  <p class="text-sm leading-[2.9rem] text-white text-center">
                    {{paketBusinesses[1].creatorSystem[idx]}}
                  </p>
                </li>
              </div>
              <div class="w-full flex">
                <button class="border border-white text-white hover:border-black hover:text-black hover:bg-white text-sm font-semibold rounded-full gradient-button transition py-4 px-12 mt-6 mb-16 mx-auto">
                  <span>Langganan</span>
                </button>
              </div>
            </div>
             
            <div class="bg-white mx-3 h-auto w-1/3 overflow-hidden relative rounded-[10px] shadow-xl">
              <div class="pt-12 px-6 pb-4 items-center">
                <h4 class="mt-5 mb-2 leading-[1.5rem] text-[21px] text-black font-bold text-center">Early Stage</h4>
                <p class="text-sm leading-[26px] text-white text-opacity-60 text-center">
                  Description About
                </p>
              </div>
              <div class="py-3 px-8 w-full h-auto">
                <li class="flex items-center justify-center border-b border-black">
                  <p class="text-sm leading-[2.9rem] text-black font-bold text-center">
                    Creator Web
                  </p>
                </li>
                <li class="flex items-center justify-center border-b border-black" v-for="(paketDetails, idx) in paketBusinesses[0].creatorWeb" :key="idx">
                  <p class="text-sm leading-[2.9rem] text-black text-center">
                    {{paketBusinesses[0].creatorWeb[idx]}}
                  </p>
                </li>
                <li class="flex items-center justify-center border-b border-black">
                  <p class="text-sm leading-[2.9rem] text-black font-bold text-center">
                    Creator System
                  </p>
                </li>
                <li class="flex items-center justify-center border-b border-black" v-for="(paketDetails, idx) in paketBusinesses[0].creatorSystem" :key="idx">
                  <p class="text-sm leading-[2.9rem] text-black text-center">
                    {{paketBusinesses[0].creatorSystem[idx]}}
                  </p>
                </li>
              </div>
              <div class="w-full flex">
                <UiCustomBtn paddingClass="py-4 px-12 mx-auto mt-6" text="Langganan"/>
              </div>
            </div>
          </div>
          <section class="my-10 w-full bg-white rounded-xl shadow md border-t border-t-purple py-8 px-[55px] mx-auto items-center flex justify-between">
            <p>
              Belum menemukan pilihan layanan yang sesuai? Lihat lebih lengkap di halaman Pricing kami!
            </p>
            <UiCustomBtn paddingClass="px-12 py-4" text="Pricing Plan"/>
           </section>
        </div>
      </div>
    </section>
    <section class="bg-[#eff1f3] relative z-20">
      <svg width="100%" height="600px" xmlns="http://www.w3.org/2000/svg" class="absolute -top-[500px]"  style="transform: rotateY(180deg)" data-v-55738782=""><path id="svg_1" d="m-12.66406,442.40068c352.72654,-76.36348 565.45337,5.45453 696.36219,19.99996c130.90882,14.54542 270.90852,-23.63632 367.27196,-47.27263c96.36344,-23.63631 379.99921,-154.54513 527.27163,-209.09047c147.27242,-54.54535 381.813,-92.55755 406.36076,-99.00598c12.27388,-3.22421 917.96684,-113.93032 715.00991,10.61478c-202.95693,124.5451 -210.46055,521.28714 -198.64021,540.29354c11.82034,19.0064 -2500.90899,-15.53962 -2500.0019,-16.36399c-0.90709,0.82437 -9.99798,-180.99343 -9.09089,-181.8178" stroke-opacity="null" stroke-width="0" stroke="#000" fill="#f7f8f9" data-v-55738782=""></path> <path id="svg_2" d="m-116.90461,507.88064c314.5448,-112.72704 523.63527,-21.81814 878.17999,12.72724c354.54471,34.54538 632.72595,-225.45407 978.17978,-294.54484c172.72691,-34.54538 291.36195,-62.7275 368.52007,-78.40952c77.15812,-15.68202 352.84215,-22.50036 359.66142,-7.04537c13.63854,30.90997 97.72734,614.54347 50.90961,639.99858c-46.81772,25.4551 -855.68236,4.54593 -1433.63569,1.81866c-577.95334,-2.72727 -1155.90718,-5.45466 -1155.45364,-5.45491" stroke-opacity="null" stroke-width="0" stroke="#000" fill="#fbfcfc" data-v-55738782=""></path> <path id="svg_3" d="m-115.93584,623.27542c234.54496,-132.72699 429.09001,-112.72703 678.1804,-83.63619c249.09039,29.09085 389.09011,30.90903 656.36228,-107.2725c267.27217,-138.18153 816.36193,-207.2723 1121.81584,-170.90873c305.45391,36.36356 -292.72666,-19.99996 -293.63778,-18.18228c71.36548,8.18218 627.05432,68.63506 626.48637,265.22584c-0.56794,196.59079 -20.11364,456.59134 -31.02284,531.13767c-10.90919,74.54633 -1561.82313,-36.3646 -1565.45948,-34.54642c-3.63636,1.81818 -1249.08831,-1.81818 -1248.18122,-1.81869c-0.90709,0.00051 39.09282,-234.54445 39.99992,-234.54496c-0.9071,0.00051 -4.54345,-76.36297 -3.63636,-76.36348" stroke-opacity="null" stroke-width="0" stroke="#000" fill="#ffffff" data-v-55738782=""></path></svg>
    </section>
    <footer class="relative bg-[#6f279c] w-full z-20 top-[150px] pb-24">
      <svg width="100%" height="400" xmlns="http://www.w3.org/2000/svg" class="absolute -top-[310px]"><path id="svg_2" fill="#6f279c" stroke="#000" stroke-width="0" d="m-16.68437,95.44889c0,0 5.33335,176.00075 660.00283,93.33373c327.33474,-41.33351 503.33549,15.3334 639.00274,35.66682c135.66725,20.33342 59.66691,9.66671 358.33487,28.33346c298.66795,18.66676 268.66829,-45.00088 382.66831,-112.00048c114.00002,-66.9996 718.31698,-59.48704 1221.66946,95.563c503.35248,155.05004 -221.83202,184.10564 -243.66935,197.60521c-21.83733,13.49958 -3008.67549,-19.83371 -3008.00467,-20.83335c-0.67082,0.99964 -30.00428,-232.33469 -10.00419,-317.66839z" class="svg-fill-color-primary-dark"></path></svg>
      <div class="grid grid-cols-12 w-full max-w-[1240px] mx-auto text-white gap-x-6 relative">
        <div class="col-span-6 text-white">
          <h4  class="leading-[27px] text-[19px] font-semibold mb-4">Tentang Kami</h4>
          <p class="text-xs leading-6">
            Hestara merupakan platform pembuatan aplikasi tanpa kode pemrograman yang membantu pelaku bisnis pemula (startup), individu (peneliti) dan organisasi dalam mengembangkan aplikasi secara cepat dan dinamis.
          </p>
        </div>
        <div class="col-span-3 text-white flex flex-col">
          <h4  class="leading-[27px] text-[19px] font-semibold mb-4">Link Penting</h4>
          <a class="text-xs leading-6 ">
            Hestara Creator Web
          </a>
          <a class="text-xs leading-6">
            Hestara Creator System
          </a>
          <a class="text-xs leading-6">
            Pricing Plan
          </a>
        </div>
        <div class="col-span-3 text-white">
          <h4  class="leading-[27px] text-[19px] font-semibold mb-4">Contact Us</h4>
          <p class="text-xs leading-6 mb-1">
            Jalan Bali Cliff No. 33A, Ungasan, Kuta Selatan
          </p>
          <p class="text-xs leading-6 mb-1">
            Phone: (+62) 851-6290-0414
          </p>
          <p class="text-xs leading-6 mb-1">
           Email: info@hestara.app
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  data: () => ({
    paketBusinesses: [
      {
        title: "Free Trial",
        creatorWeb: ["1 Website", "1 Halaman Web", "Tidak Dapat Menggunakan Alamat (Domain) Sendiri"],
        creatorSystem: ["1 Web Api", "3 Proses Bisnis (Action) per Web API", "Maksimum 500 requests per Proses Bisnis", "Tidak Dapat Menggunakan Alamat (Domain) Sendiri"],
      },
      {
        title: "Early Stage",
        creatorWeb: ["1 Website", "5 Halaman Web", "Dapat Menggunakan Alamat (Domain) Sendiri"],
        creatorSystem: ["1 Web Api", "10 Proses Bisnis (Action) per Web API", "Maksimum 1000 requests per Proses Bisnis", "Dapat Menggunakan Alamat (Domain) Sendiri", "1x Meeting Schedule with Software Consultant"],
      },
      {
        title: "Business",
        creatorWeb: ["1 Website", "15 Halaman Web", "Dapat Menggunakan Alamat (Domain) Sendiri"],
        creatorSystem: ["1 Web Api", "25 Proses Bisnis (Action) per Web API", "Maksimum 3000 requests per Proses Bisnis", "Dapat Menggunakan Alamat (Domain) Sendiri", "1x Meeting Schedule with Software Consultant"],
      },
    ]
  })
})
</script>

<style scoped>
</style>
