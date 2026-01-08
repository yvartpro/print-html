export const content = `
<main class="text-sm text-gray-800">

  <!-- Customer Information -->
  <section class="mb-6">
    <h3 class="text-green-900 font-semibold text-base mb-1">
      Customer: IRAB
    </h3>
  </section>

  <!-- Invoice Details -->
  <section class="mb-6">
    <h3 class="text-green-900 font-semibold text-base mb-1">
      Cost Breakdown
    </h3>

    <div class="border border-gray-200 rounded-md overflow-hidden">
      <div class="flex justify-between px-4 py-2 border-b">
        <span>Website development</span>
        <span class="font-semibold text-green-900">500 000 FBu</span>
      </div>

      <div class="flex justify-between px-4 py-2 border-b">
        <span>Hosting plan (Hogi – 1 year)</span>
        <span class="font-semibold text-green-900">365 000 FBu</span>
      </div>

      <div class="flex justify-between px-4 py-2">
        <span>Domain name (1 year)</span>
        <span class="font-semibold text-green-900">60 000 – 100 000 FBu</span>
      </div>
    </div>
  </section>

  <!-- Total -->
  <section class="mt-6 flex justify-between items-center">
    <h3 class="text-green-900 font-semibold text-base">
      Total Amount: 
    </h3>
    <p class="font-semibold text-lg text-green-900">925 000 – 965 000 FBu</p>
  </section>

  <!-- Signature -->
  <section class="mt-12 flex flex-col items-end">
    <div class="w-40 h-20 border-b border-gray-300 flex items-end justify-center mb-2">
       <!-- Replace with actual signature image once provided -->
       <img src="./sign.png" alt="Signature" class="max-h-full object-contain opacity-50 italic text-xs" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
       <span class="hidden text-gray-400 text-xs mb-1">Place Signature Here</span>
    </div>
    <div class="text-center">
      <p class="font-bold text-green-900">Yves Nshemezimana</p>
      <p class="text-xs text-gray-600 uppercase tracking-wider">CEO</p>
    </div>
  </section>

</main>
`
