<?
	class Tarefa extends Dao{

		public $sTable = 'tarefas';
		public $sFields = '';

		public function getTarefas($user, $q, $caderno){
	
			if (isset($q) && $q > 0) {				
				$_SESSION['last_codcaderno'] = $q;
			}

			$sFields = "*, c.nomecaderno";
			$sTable = "tarefas t INNER JOIN cadernos c ON c.codcaderno = t.codcaderno";

			$sWhere = "WHERE t.codcaderno = " . $_SESSION['last_codcaderno'] . "";

			$aTarefas = $this->getData($sTable, $sWhere, $sFields);

			echo json_encode($aTarefas);

		}
		


		public function updateTarefa($user, $q, $aDados){

			$sWhere = "WHERE codtarefa = '" . $aDados->oTarefa->codtarefa . "' ";
			$this->switchTarefa($this->sTable, $sWhere);		

			echo json_encode(array('msg' => 'true'));		

		}

		public function insertTarefa($user, $q, $aDados){
			$aDados->oTarefa->valor = 0;
			$sSet = buildSet($aDados);
			// die($sSet);
			$sSet .= ", codcaderno = '" . $_SESSION['last_codcaderno'] . "'";
			
			$this->insertData($this->sTable, $sSet, "morre");

		}	



	}
?>