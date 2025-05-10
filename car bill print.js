function printBill() {
    const billBox = document.querySelector('.invoice-box');
    if (!billBox) {
        alert("❌ Try agen plz");
        return;
    }

    const billContent = billBox.outerHTML;

    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html>
        <head>
            <title>Print Invoice</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                .invoice-box { border: 1px solid #ffb38a; padding: 30px; max-width: 800px; margin: auto; }
                table th, table td { border: 1px solid #ffa366 !important; text-align: center; }
                .signature { text-align: right; margin-top: 40px; }
                .terms { font-size: 12px; color: #777; }
            </style>
        </head>
        <body>${billContent}</body>
        </html>
    `);

   
    printWindow.document.close();

 
    printWindow.onload = function () {
        setTimeout(() => {
            printWindow.focus();
            printWindow.print();
            printWindow.close();
        }, 500); 
    };
}
