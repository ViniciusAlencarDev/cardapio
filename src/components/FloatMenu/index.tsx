import React, { useState } from 'react';
import * as Styles from './styles';
import { FaPlus, FaInfoCircle, FaStop } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import QRCodePIX from '../../assets/qrcode-pix.png';
import { data } from '../../database/db.json';

export default function FloatMenu() {

    const [activate, setActivate] = useState<boolean>(false);
    const [boxAtivate, setBoxAtivate] = useState<number>(0);

    function selectText(nodeId: string) {
        const node: any = document.getElementById(nodeId);
        const body:any = document.body;
    
        if (body.createTextRange) {
            const range = body.createTextRange();
            range.moveToElementText(node);
            range.select();
        } else if (window.getSelection) {
            const selection = window.getSelection();
            const range = document.createRange();
            range.selectNodeContents(node || document);
            selection?.removeAllRanges();
            selection?.addRange(range);
        } else {
            console.warn("Não foi possível selecionar o texto: incompatível com o navegador.");
        }
    }

    async function copyKeyPIX() {
        if ('clipboard' in navigator) {
            try {
                await navigator.clipboard.writeText(data.keyPIX);
                toast.success(`Chave do PIX copiada para a área de transferência!`);
            } catch(error) {
                toast.error('Erro ao copiar para a área de transferência!');
            }
          } else {
            selectText("key-pix")
            document.execCommand('copy')

            try {
                document.execCommand('copy');
                toast.success('Chave do PIX copiada para a área de transferência!');
            } catch (err) {
                toast.error('Erro ao copiar para a área de transferência!');
            }
          }
    }

    return (
        <Styles.Container>
            <ToastContainer />

            {
                activate &&
                <Styles.BoxBackground>
                    <Styles.BackgroundBlack onClick={() => { setActivate(false); setBoxAtivate(0) }} activate={activate}></Styles.BackgroundBlack>
                    {
                        boxAtivate === 0 &&
                        <>
                            <Styles.Card onClick={() => setBoxAtivate(1)} rotate={10} activate={activate}>+ Contatos</Styles.Card>
                            <Styles.Card onClick={() => setBoxAtivate(2)} rotate={35} activate={activate}>Redes Sociais</Styles.Card>
                            <Styles.Card onClick={() => setBoxAtivate(3)} rotate={60} activate={activate}>QRCode/Chave PIX</Styles.Card>
                        </>
                    }

                    {
                        boxAtivate === 1 &&
                        <>
                            <Styles.Box>
                                <Styles.BoxTitle><FaInfoCircle size={15} /> Contatos</Styles.BoxTitle>
                                {
                                    data.contacts.map((contact, contactKey) => (
                                        <Styles.BoxDescription key={contactKey} onClick={() => window.open(contact.link)}><b>{contact.type}:</b> <u>{contact.value}</u></Styles.BoxDescription>
                                    ))
                                }
                            </Styles.Box>
                        </>
                    }

                    {
                        boxAtivate === 2 &&
                        <>
                            <Styles.Box>
                                <Styles.BoxTitle><FaInfoCircle size={15} /> Redes Sociais</Styles.BoxTitle>
                                {
                                    data.socialNetwork.map((socialNetwork, socialNetworkKey) => (
                                        <Styles.BoxDescription key={socialNetworkKey} onClick={() => window.open(socialNetwork.link)}><b>{socialNetwork.type}:</b> <u>{socialNetwork.value}</u></Styles.BoxDescription>
                                    ))
                                }
                            </Styles.Box>
                        </>
                    }

                    {
                        boxAtivate === 3 &&
                        <>
                            <Styles.Box>
                                <Styles.BoxTitle><FaInfoCircle size={15} /> QR Code / Chave PIX</Styles.BoxTitle>
                                <Styles.BoxDescription>
                                    <Styles.BoxImage src={QRCodePIX} />
                                </Styles.BoxDescription>
                                <Styles.BoxDescription>
                                    <div>
                                        <span><b>Chave Pix:</b> <span id="key-pix">{data.keyPIX}</span></span>
                                        <Styles.BoxButtonClipboard type="button" value="Copiar" onClick={copyKeyPIX} />
                                    </div>
                                </Styles.BoxDescription>
                            </Styles.Box>
                        </>
                    }

                </Styles.BoxBackground>
            }
            {
                boxAtivate === 0 &&
                <Styles.Button activate={activate} onClick={() => activate ? setActivate(false) : setActivate(true)}>{!activate ? <FaPlus size={15}/> : <FaStop size={15} />}</Styles.Button>
            }

        </Styles.Container>
    );

}
