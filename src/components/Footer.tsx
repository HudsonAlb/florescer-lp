

const Footer = () => {
  return (
    <footer className="bg-white border-t border-brand-lavender-soft py-12 overflow-hidden w-full max-w-full">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-12 mb-12 text-center md:text-left w-full">
          <div className="col-span-2 flex flex-col items-center md:items-start">
            <div className="mb-6">
              <img src="/logo.png" alt="Florescer Logo" className="h-16 w-auto object-contain" />
            </div>
            <p className="text-brand-text/60 max-w-sm leading-relaxed mx-auto md:mx-0">
              Centro de Desenvolvimento Infantil especializado no acolhimento e tratamento de crianças autistas e com outros atrasos no neurodesenvolvimento.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold mb-6">Navegação</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-brand-text/60 hover:text-brand-accent transition-colors">Início</a></li>
              <li><a href="#sobre" className="text-brand-text/60 hover:text-brand-accent transition-colors">Sobre Nós</a></li>
              <li><a href="#servicos" className="text-brand-text/60 hover:text-brand-accent transition-colors">Especialidades</a></li>
              <li><a href="#contato" className="text-brand-text/60 hover:text-brand-accent transition-colors">Contato</a></li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold mb-6">Atendimento</h4>
            <p className="text-brand-text/60 mb-4">Segunda a Sexta<br />08:00 às 18:00</p>
            <p className="text-brand-text/60 italic text-sm">Sábados sob agendamento prévio.</p>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-lavender-soft flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-brand-text/40">
          <p>© 2025 Florescer CDI. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-accent transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-brand-accent transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
