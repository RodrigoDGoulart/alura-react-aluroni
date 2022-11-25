import styles from './Ordenador.module.scss';
import opcoes from './opcoes.json';
import { useState } from 'react';
import classNames from 'classnames';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

export type OpcoesOrdenador = '' | 'porcao' | 'qtd_pessoas' | 'preco';
interface Props {
    ordenador: OpcoesOrdenador,
    setOrdenador: React.Dispatch<React.SetStateAction<OpcoesOrdenador>>
}

export function Ordenador ({ordenador, setOrdenador}: Props){

    const [aberto, setAberto] = useState(false);
    const nomeOrdendor = ordenador && opcoes.find(opcao => opcao.value === ordenador)?.nome

    return(
        <button
        className={classNames({
            [styles.ordenador]: true,
            [styles['ordenador--ativo']]: ordenador !== ''
        })}
        onClick={() => setAberto(!aberto)}
        onBlur={() => setAberto(false)}
        >
            <span>{nomeOrdendor || 'Ordenar por'}</span>
            {aberto ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}
            <div className={classNames({
                [styles.ordenador__options]: true,
                [styles['ordenador__options--ativo']]: aberto
            })}>
                {opcoes.map(opcao => (
                    <div className={styles.ordenador__option} key={opcao.value} onClick={() => setOrdenador(opcao.value as OpcoesOrdenador)}>
                        {opcao.nome}
                    </div>
                ))}
            </div>
        </button>
    )
}