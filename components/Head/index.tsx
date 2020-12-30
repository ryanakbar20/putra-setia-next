import Head from 'next/head';

export default function Header() {
    return (
        <>
            <Head>
                <link rel="icon" href="https://pasebanbekasiraya.files.wordpress.com/2016/09/putra_setia.jpg?w=645" />
                <link
                href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap"
                rel="stylesheet"
                />
                <title>Putra Setia</title>
                {/* <!-- Bootstrap core JavaScript--> */}
                <script src="vendor/jquery/jquery.min.js"></script>
                <script src="js/bootstrap.min.js"></script>

                {/* <!-- Core plugin JavaScript--> */}
                <script src="vendor/jquery-easing/jquery.easing.js"></script>

                {/* <!-- Custom scripts for all pages--> */}
                <script src="js/sb-admin-2.min.js"></script>

                {/* <!-- Page level plugins --> */}
                <script src="vendor/datatables/jquery.dataTables.min.js"></script>
                <script src="vendor/datatables/dataTables.bootstrap4.min.js"></script>

                {/* <!-- Page level custom scripts --> */}
                <script src="js/demo/datatables-demo.js"></script>
            </Head>
        </>
    )
}
