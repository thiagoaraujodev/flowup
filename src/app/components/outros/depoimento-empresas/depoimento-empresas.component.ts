import { Component } from '@angular/core';

@Component({
  selector: 'app-depoimento-empresas',
  templateUrl: './depoimento-empresas.component.html',
  styleUrls: ['./depoimento-empresas.component.css'],
})
export class DepoimentoEmpresasComponent {
  slides = [
    {
      empresa: 'Signo Comunicação',
      funcionario: 'Ana - Gerente',
      depoimento:
        'Tivemos um aumento dos níveis de controle, o que traz consequências para a redução das despesas e, lógico, aumento nos lucros. Houve também um acompanhamento maior das receitas.',
    },
    {
      empresa: 'Mekatronik (MKS)',
      funcionario: 'Denis Leite - Gerente',
      depoimento:
        'Hoje somos mais eficientes, orçamos melhor, executamos e entregamos no prazo. Com isso nos sentimos mais preparados inclusive para enfrentar essa fase de retração do mercado que estamos vivendo.',
    },
    {
      empresa: 'H3M Ambiental',
      funcionario: 'Jéssica Marota - gestora financeira',
      depoimento:
        'Nós optamos pelo FlowUp porque ele nos auxilia muito em nossa gestão financeira na empresa, já que a nossa empresa trabalha com muitos contratos, que são divididos por projetos. Nós conseguimos lançar todas as nossas despesas de forma fácil e tranquila.',
    },
    {
      empresa: 'IPR',
      funcionario: 'Glauber Nepomuceno - sócio-diretor',
      depoimento:
        'Escolhemos o Flowup por ser uma plataforma completa de gestão empresarial. Ela engloba gestão financeira, gestão de projetos e controle de horas, trazendo praticidade para o gerenciamento da empresa.',
    },
    {
      empresa: 'Agência Capp',
      funcionario: 'Henrique Caneppele - diretor',
      depoimento:
        'O sistema FlowUp nos auxiliou bastante no que diz respeito a equipe colaborativa, em determinar quem é responsável pelo o quê, e além disso, antes do FlowUp, nós tínhamos essa necessidade que não era sanada por nenhuma outra empresa ou sistema do mercado, que tivesse o sistema de gerenciamento de tarefas e financeiro integrado e por um valor acessível.',
    },
    {
      empresa: 'Nostrali',
      funcionario: 'David Manzini - diretor',
      depoimento:
        'O FlowUp é a plataforma de gerenciamento de tarefas mais flexível que encontrei. Dá pra criar, filtrar e configurar de várias maneiras as suas tarefas. Outra questão é a possibilidade de ter o controle financeiro e o controle de tarefas na mesma ferramenta, tornando o sistema muito completo. A facilidade de acesso ao atendimento também é um ponto importante. É via Whatsapp, as respostas são ágeis e você não precisa ficar horas no telefone, esperando que alguém nos atenda.',
    },
    {
      empresa: 'Agência Vela',
      funcionario: 'Adriano Müller - diretor',
      depoimento:
        'O uso do FlowUp para nós é extremamente relevante, pelo fato de que conseguimos controlar todas as nossas equipes, além da questão dos relatórios, que é bastante significativa. No meu caso como gestor, a parte do Cash é indispensável, pois é lá que eu consigo saber o custo que eu tenho com cada cliente. Isso é o que eu acho mais atraente na ferramenta, pois consigo fazer, de fato,uma gestão completa da minha agência, desde o fluxo de trabalho no modo Kanban até a gestão financeira.',
    },
  ];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    speed: 400,
  };
}
