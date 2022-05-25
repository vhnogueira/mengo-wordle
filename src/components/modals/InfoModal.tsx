import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Como jogar" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">
        <strong>Saudações rubro-negras!</strong>
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">
        Esse é um jogo de adivinhação onde você deve acertar o nome de um
        jogador que já jogou no Flamengo na história - pode ser um ídolo ou um
        perna de pau.
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Adivinhe o jogador em 6 tentativas. Após cada palpite, a cor das peças
        mudará para mostrar se seu palpite estava na palavra.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="G"
          status="correct"
        />
        <Cell value="A" />
        <Cell value="B" />
        <Cell value="I" />
        <Cell value="G" />
        <Cell value="O" />
        <Cell value="L" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        A letra G está na palavra e no local correto!
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="G" />
        <Cell value="E" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="R"
          status="present"
        />
        <Cell value="S" />
        <Cell value="O" />
        <Cell value="N" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        A letra R está na palavra mas no local errado.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="L" />
        <Cell value="E" />
        <Cell value="O" />
        <Cell isRevealing={true} isCompleted={true} value="N" status="absent" />
        <Cell value="I" />
        <Cell value="D" />
        <Cell value="A" />
        <Cell value="S" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        A letra N não está na palavra em nenhum local.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        Esta é uma versão de código aberto do jogo de adivinhação de palavras
        que todos conhecemos e amamos -{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          target={'_blank'}
          className="underline font-bold"
        >
          confira o código aqui
        </a>{' '}
      </p>
      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        Adaptado por{' '}
        <a
          className="font-bold underline"
          href="https://github.com/vhnogueira/"
          target={'_blank'}
        >
          Victor Nogueira
        </a>
        .
      </p>
    </BaseModal>
  )
}
