let booksArray = [{
        name: 'Grit: The Power of Passion and Perseverance',
        by: 'Angela Duckworth',
        link: 'https://www.amazon.com/gp/product/B010MH9V3W?storeType=ebooks&pf_rd_t=40901&pd_rd_i=B010MH9V3W&pf_rd_m=A2R2RITDJNW1Q6&pageType=STOREFRONT&pf_rd_p=515b2ffc-495a-4104-97dc-ac0014ddb86c&pf_rd_r=TSCPMZ23WWYVZAY1BXVS&pd_rd_wg=iJ0Ws&pf_rd_s=merchandised-search-3&ref_=dbs_f_ebk_rwt_wigo_msx_w_ms3_kmw_3adb8bf6-e1d1-42e3-ac8c-e80eeb8&pd_rd_w=6As8x&pf_rd_i=154606011&pd_rd_r=d1818a8d-cf42-40fd-a3d4-e2938893786b',
        image: '.P/images/1.jpg',
        isRead: 1
    },
    {
        name: 'Harry Potter and the Order of the Phoenix',
        by: 'J.K. Rowling',
        link: 'https://www.amazon.com/gp/product/B0192CTMXM?storeType=ebooks&pf_rd_t=40901&pd_rd_i=B0192CTMXM&pf_rd_m=A2R2RITDJNW1Q6&pageType=STOREFRONT&pf_rd_p=515b2ffc-495a-4104-97dc-ac0014ddb86c&pf_rd_r=TSCPMZ23WWYVZAY1BXVS&pd_rd_wg=iJ0Ws&pf_rd_s=merchandised-search-3&ref_=dbs_f_ebk_rwt_wigo_msx_w_ms3_kmw_3adb8bf6-e1d1-42e3-ac8c-e80eeb8&pd_rd_w=6As8x&pf_rd_i=154606011&pd_rd_r=d1818a8d-cf42-40fd-a3d4-e2938893786b',
        image: './images/2.jpg',
        isRead: 0
    },
    {
        name: 'Corrupt (Devil\'s Night Book 1)',
        by: 'Penelope Douglas',
        link: 'https://www.amazon.com/gp/product/B0181ONKDU?storeType=ebooks&pf_rd_t=40901&pd_rd_i=B0181ONKDU&pf_rd_m=A2R2RITDJNW1Q6&pageType=STOREFRONT&pf_rd_p=515b2ffc-495a-4104-97dc-ac0014ddb86c&pf_rd_r=TSCPMZ23WWYVZAY1BXVS&pd_rd_wg=iJ0Ws&pf_rd_s=merchandised-search-3&ref_=dbs_f_ebk_rwt_wigo_msx_w_ms3_kmw_3adb8bf6-e1d1-42e3-ac8c-e80eeb8&pd_rd_w=6As8x&pf_rd_i=154606011&pd_rd_r=d1818a8d-cf42-40fd-a3d4-e2938893786b',
        image: './images/3.jpg',
        isRead: 1
    }
];

const bodyElement = document.querySelector('body');

booksArray.forEach(function(book) {
    const element = document.createElement('li');
    const node = document.createElement('a');
    const bookcover = document.createElement('img');

    if (book.isRead) {
        node.style.color = 'green';
    }
    node.href = book.link;
    node.innerText = book.name + ' - ' + book.by;
    bookcover.src = book.image;
    bookcover.width = '200';

    element.appendChild(node);
    element.appendChild(bookcover);
    bodyElement.appendChild(element);
});