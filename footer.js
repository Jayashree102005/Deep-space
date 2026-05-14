document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("footer");
  if (!footer) return;

  footer.innerHTML = `
<footer class="bg-[#FDFBF9] text-[#5D4037] w-full border-t border-[#EFEBE9]">

  <div class="max-w-7xl mx-auto px-6 py-14">

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

      <div>
       <h1 class="text-2xl font-bold text-[#3E2723]">
  <a href="index.html" class="flex items-center gap-2 transition">
    <i class="bi bi-layers-half text-[#8D6E63]"></i>
    <span class="tracking-tight">DEEP</span>
    <span class="font-normal">SPACE</span>
  </a>
</h1>
        <p class="mt-4 text-[#5D4037] text-sm leading-relaxed">
          Transforming spaces through AI-powered visualization. 
          From virtual staging to full home renovations, we bring your interior dreams to life.
        </p>

        <div class="flex gap-4 mt-6 text-xl">
          <a href="#" class="hover:text-[#8D6E63] transition"><i class="bi bi-instagram"></i></a>
          <a href="#" class="hover:text-[#8D6E63] transition"><i class="bi bi-pinterest"></i></a>
          <a href="#" class="hover:text-[#8D6E63] transition"><i class="bi bi-facebook"></i></a>
          <a href="#" class="hover:text-[#8D6E63] transition"><i class="bi bi-linkedin"></i></a>
        </div>
      </div>

      <div>
        <h3 class="text-lg font-bold mb-4 text-[#3E2723] uppercase tracking-wider">
          Services
        </h3>
        <ul class="space-y-2 text-[#5D4037] text-sm">
          <li><a href="staging.html" class="hover:text-[#8D6E63] transition">Virtual Staging</a></li>
          <li><a href="renovation.html" class="hover:text-[#8D6E63] transition">3D Renovation</a></li>
          <li><a href="furniture.html" class="hover:text-[#8D6E63] transition">Furniture Library</a></li>
          <li><a href="floor-plans.html" class="hover:text-[#8D6E63] transition">3D Floor Plans</a></li>
        </ul>
      </div>

      <div>
        <h3 class="text-lg font-bold mb-4 text-[#3E2723] uppercase tracking-wider">
          Quick Links
        </h3>
        <ul class="space-y-2 text-[#5D4037] text-sm">
          <li><a href="gallery.html" class="hover:text-[#8D6E63] transition">Gallery</a></li>
          <li><a href="service.html" class="hover:text-[#8D6E63] transition">Service</a></li>
          <li><a href="About.html" class="hover:text-[#8D6E63] transition">About</a></li>
          <li><a href="contact.html" class="hover:text-[#8D6E63] transition">Support</a></li>
        </ul>
      </div>

      <div>
        <h3 class="text-lg font-bold mb-4 text-[#3E2723] uppercase tracking-wider">
          Get In Touch
        </h3>

        <ul class="space-y-3 text-[#5D4037] text-sm">
          <li class="flex items-start gap-2">
            <i class="bi bi-geo-alt-fill text-[#8D6E63]"></i>
            <span>Chennai, Tamil Nadu, India</span>
          </li>
          <li class="flex items-center gap-2">
            <i class="bi bi-telephone-fill text-[#8D6E63]"></i>
            <span>+91 98765 43210</span>
          </li>
          <li class="flex items-center gap-2">
            <i class="bi bi-envelope-fill text-[#8D6E63]"></i>
            <span>hello@deepspace.design</span>
          </li>
        </ul>
      </div>

    </div>

  </div>

  <div class="border-t border-[#EFEBE9] py-8 text-center text-[#8D6E63] text-xs px-4 bg-[#F9F7F5]">
    <p class="tracking-widest uppercase">
      © ${new Date().getFullYear()} Deep Space Design Studio. All Rights Reserved.
    </p>
  </div>

</footer>
`;
});