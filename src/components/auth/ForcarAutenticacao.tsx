import Image from "next/image"
import loading from '../../../public/loading.gif'
import useAuth from "@/data/hook/useAuth"
import route from "next/router";
import Head from "next/head";

export default function ForcarAutenticacao(props: any) {
    const {user, carregando} = useAuth()
    function renderizarConteudo(){
        return (
            <>
                <Head>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                if(!document.cookie?.includes("admin-template-auth")) {
                                    window.location.href = "/autenticacao"
                                }
                            `
                        }}
                    />
                </Head>
                {props.children}
            </>
        )
    }
    
    function renderizarCarregando() {
        return (
            <div className={`
                flex justify-center items-center h-screen
            `}>
                <Image src={loading} alt='gif de carregamento' />
            </div>
        )
    }

    if(!carregando && user?.email) {
        return renderizarConteudo()
    } else if  (carregando){
        return renderizarCarregando()
    } else {
        route.push('/autenticacao')
        return null 
    }

}