// ===== Quantity functions (for multiple items) =====
function increaseQty(btn) {
  let qtyInput = btn.parentElement.querySelector(".quantity");
  qtyInput.value = parseInt(qtyInput.value) + 1;
}

function decreaseQty(btn) {
  let qtyInput = btn.parentElement.querySelector(".quantity");
  if (parseInt(qtyInput.value) > 1) {
    qtyInput.value = parseInt(qtyInput.value) - 1;
  }
}

// ===== Delete function =====
function deleteItem(btn) {
  let cartItem = btn.closest(".cart-item");
  cartItem.remove();
}

// ===== Cart Sidebar =====
const cartBtn = document.querySelector(".cart-icon");
const closeBtn = document.getElementById("closeBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

cartBtn.addEventListener("click", (e) => {
  e.preventDefault();
  sidebar.classList.toggle("open");
  overlay.classList.toggle("show");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("open");
  overlay.classList.remove("show");
});

overlay.addEventListener("click", () => {
  sidebar.classList.remove("open");
  overlay.classList.remove("show");
});

function openPDFModal(pdfUrl) {
  document.getElementById("pdfModal").style.display = "block";
  document.getElementById("pdfFrame").src = pdfUrl;
  document.body.style.overflow = "hidden"; // disable background scroll
}

function closePDFModal() {
  document.getElementById("pdfModal").style.display = "none";
  document.getElementById("pdfFrame").src = "";
  document.body.style.overflow = "auto"; // re-enable scroll
}
